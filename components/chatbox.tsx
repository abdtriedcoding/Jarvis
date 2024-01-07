"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { db } from "@/firebase/firebaseConfig";
import {
  doc,
  collection,
  setDoc,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { model } from "@/lib/generative-ai";
import { useSession } from "next-auth/react";

const ChatBox = ({ chatId }: { chatId?: string }) => {
  const { data: session } = useSession();
  const user = session?.user;
  const uid = session?.user.id;
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Still in progress----TODO
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const searchQuery = prompt.trim();
      setPrompt("");

      // Check if chatId is defined
      if (!chatId) {
        console.warn("chatId is undefined. Creating a new chat.");
        const newChatId = doc(collection(db, "ids")).id;
        const chatDocRef = doc(db, `users/${uid}/chats/${newChatId}`);
        await setDoc(chatDocRef, {
          id: newChatId,
          timestamp: serverTimestamp(),
        });
        router.push(`/chat/${newChatId}`);
        // Send the user message
        await sendMessageToChat(newChatId, searchQuery);
        // Contact AI and send AI's response
        await sendAIToChat(newChatId, searchQuery);
        return;
      }

      // Send the user message
      await sendMessageToChat(chatId, searchQuery);

      // Contact AI and send AI's response
      await sendAIToChat(chatId, searchQuery);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessageToChat = async (chatId: string, searchQuery: string) => {
    const messagesCollectionRef = collection(
      db,
      `users/${uid}/chats/${chatId}/messages`
    );
    const userMessage = {
      searchQuery,
      timestamp: serverTimestamp(),
      user: {
        name: user?.name,
        email: user?.email,
        avatar: user?.image,
      },
    };
    await addDoc(messagesCollectionRef, userMessage);
  };

  const sendAIToChat = async (chatId: string, searchQuery: string) => {
    const messagesCollectionRef = collection(
      db,
      `users/${uid}/chats/${chatId}/messages`
    );
    const generationResult = await model.generateContent(searchQuery);
    const response = generationResult.response;
    const text = response.text();

    const aiMessage = {
      response: text,
      timestamp: serverTimestamp(),
      user: {
        name: "jarvis",
      },
    };
    await addDoc(messagesCollectionRef, aiMessage);
  };

  return (
    <form onSubmit={sendMessage} className="sticky bottom-0 bg-white z-20 p-4">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <Input
            type="text"
            name="search"
            placeholder="Message chatGPT"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "sending" : "send"}
          </Button>
        </div>
        <p className="text-center text-xs">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </form>
  );
};

export default ChatBox;
