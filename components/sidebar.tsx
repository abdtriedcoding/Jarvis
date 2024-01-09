// "use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PenSquareIcon } from "lucide-react";
import Link from "next/link";
import ChatHistoryBox from "./chat-historybox";
import ProfileDropdown from "./profile-dropdown";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "@/firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = async({uid}:{uid?:string}) => {

  // const [user] = useAuthState(auth);

  // const [chats] = useCollection(
  //   query(collection(db, `users/${uid}/chats/`))
  // );

  const chatsCollection = collection(db, `users/${uid}/chats`);
  const q = query(chatsCollection);
  const chats = await getDocs(q);
  // const chats = querySnapshot.docs.map((doc) => ({
  //   id: doc.id,
  //   ...doc.data(),
  // }));


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
