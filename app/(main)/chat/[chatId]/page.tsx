import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ChatScreen from "@/components/chat-screen";
import ChatBox from "@/components/chatbox";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { db } from "@/firebase/firebaseConfig";
import { User } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { chatId: string } }) => {
  const { chatId } = params;
  const session = await getServerSession(authOptions);
  const uid = (session?.user as User)?.id;

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
          <Navbar chatId={chatId}/>
          <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
            <ChatScreen chatId={chatId}/>
          </div>
          <ChatBox chatId={chatId} />
        </div>
      </div>
    </div>
  );
};

export default Page;
