import { db } from "@/firebase/firebaseConfig";
import {
  doc,
  collection,
  setDoc,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import router from "next/router";
import { model } from "./generative-ai";
import { User } from "@/types";

export const sendMessage = async (
  userInput: string,
  setUserInput: (value: string) => void,
  chatId: string | undefined,
  setIsLoading: (isLoading: boolean) => void,
  user: User
) => {
  try {
    setIsLoading(true);

    const userMessage = userInput.trim();
    setUserInput("");

    if (!chatId) {
      console.warn("chatId is undefined. Creating a new chat.");
      const newChatId = doc(collection(db, "ids")).id;
      router.push(`/chat/${newChatId}`);
      const chatDocRef = doc(db, `users/${user.id}/chats/${newChatId}`);
      await setDoc(chatDocRef, {
        id: newChatId,
        timestamp: serverTimestamp(),
      });
      await sendMessageToChat(newChatId, userMessage, user, setIsLoading);
      await sendAIToChat(newChatId, userMessage, user.id);
      return;
    }

    await sendMessageToChat(chatId, userMessage, user, setIsLoading);
    await sendAIToChat(chatId, userMessage, user.id);
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    setIsLoading(false);
  }
};

export const sendMessageToChat = async (
  chatId: string,
  userMessage: string,
  user: User,
  setIsLoading?: (isLoading: boolean) => void
) => {
  const messagesCollectionRef = collection(
    db,
    `users/${user.id}/chats/${chatId}/messages`
  );

  const messageData = {
    text: userMessage,
    createdAt: serverTimestamp(),
    user: {
      name: user?.name,
      avatar: user?.image || `https://ui-avatars.com/api/?name=${user?.name}`,
    },
  };
  await addDoc(messagesCollectionRef, messageData);

  if (setIsLoading) {
    setIsLoading(false);
  }
};

export const sendAIToChat = async (
  chatId: string,
  userMessage: string,
  userId: string
) => {
  const messagesCollectionRef = collection(
    db,
    `users/${userId}/chats/${chatId}/messages`
  );

  const generationResult = await model.generateContent(userMessage);
  const response = generationResult.response;
  const text = response.text();

  const aiMessage = {
    text: text || "Sorry, not able to find an answer for that search!",
    createdAt: serverTimestamp(),
    user: {
      name: "Jarvis",
      avatar:
        "https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png",
    },
  };
  await addDoc(messagesCollectionRef, aiMessage);
};
