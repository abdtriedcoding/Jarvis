"use client";

import { ArrowDownCircle, CopyIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { db } from "@/firebase/firebaseConfig";
import { collection, query, orderBy } from "firebase/firestore";
import { User } from "@/types";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";

const ChatScreen = ({ chatId }: { chatId?: string }) => {
  const { data: session } = useSession();
  const uid = (session?.user as User)?.id;

  const messagesCollection = collection(
    db,
    `users/${uid}/chats/${chatId}/messages`
  );

  const [messagesSnapshot, loading] = useCollection(
    query(messagesCollection, orderBy("createdAt", "asc"))
  );

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {messagesSnapshot?.docs?.map((doc: any, index: number) => {
        const message = { id: doc.id, ...doc.data() };
        return (
          <div key={index} className="pb-5">
            <div className="flex space-x-2 items-center text-center">
              <Avatar>
                <AvatarImage src={message.user?.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="font-medium">{message.user?.name}</h2>
            </div>
            <div className="ml-12 space-y-2">
              <p className="text-sm">{message.text}</p>
              {message.isChatGPT && (
                <div className="flex space-x-3 items-center text-center">
                  <CopyIcon className="w-4 h-4 cursor-pointer" />
                  <ArrowDownCircle className="w-4 h-4 cursor-pointer" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScreen;
