import ChatScreen from "@/components/chat-screen";
import ChatBox from "@/components/chatbox";
import Navbar from "@/components/navbar";
import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";

const Page = async ({
  params,
  searchParams,
}: {
  params: { chatId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { chatId } = params;
  const { uid } = searchParams;

  const chatDocRef = doc(db, `users/${uid}/chats/${chatId}`);
  const chatDoc = await getDoc(chatDocRef);

  if (!chatDoc.exists()) {
    notFound();
  }

  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
        <ChatScreen />
      </div>
      <ChatBox chatId={chatId} />
    </div>
  );
};

export default Page;
