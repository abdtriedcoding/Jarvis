import ChatScreen from "@/components/chat-screen";
import ChatBox from "@/components/chatbox";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
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
    <div className="flex h-full">
      <aside className="w-64 p-4 hidden md:block bg-slate-50">
        <Sidebar />
      </aside>
      <div className="flex-1">
        <div className="h-full flex flex-col">
          <Navbar />
          <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
            <ChatScreen />
          </div>
          <ChatBox chatId={chatId} />
        </div>
      </div>
    </div>
  );
};

export default Page;
