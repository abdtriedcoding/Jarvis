import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PenSquareIcon } from "lucide-react";
import Link from "next/link";
import ChatHistoryBox from "./chat-historybox";
import ProfileDropdown from "./profile-dropdown";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { User } from "@/types";

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  const uid = (session?.user as User)?.id;

  const chatsCollection = collection(db, `users/${uid}/chats`);
  const q = query(chatsCollection, orderBy("timestamp", "desc"));
  const chats = await getDocs(q);

  return (
    <>
      <div className="flex flex-col h-full space-y-4">
        {/* New chat */}
        <Link href={"/"}>
          <div className="flex justify-between items-center text-center bg-gray-100 hover:bg-gray-200 p-1 rounded-md">
            <div className="flex space-x-2 items-center text-center">
              {/* Avatar */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {/* New chat */}
              <h3 className="text-md font-medium">New chat</h3>
            </div>
            {/* Pencil Button */}
            <PenSquareIcon className="w-5 h-5" />
          </div>
        </Link>

        {/* Chat history */}
        <div className="max-h-[480px] pr-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 h-full">
          {chats?.docs.map((doc) => (
            <ChatHistoryBox key={doc.id} chatId={doc.id} />
          ))}
        </div>

        {/* Profile dropdown */}
        <ProfileDropdown />
      </div>
    </>
  );
};

export default Sidebar;
