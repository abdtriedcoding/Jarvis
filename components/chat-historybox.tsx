"use client"

import { auth, db } from "@/firebase/firebaseConfig";
import { query, collection, orderBy } from "firebase/firestore";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const ChatHistoryBox = ({ chatId }: { chatId: string }) => {
  const [user, authstateLoading] = useAuthState(auth);

  const [messages, loading] = useCollection(
    query(
      collection(db, `users/${user?.uid}/chats/${chatId}/messages`),
      orderBy("timestamp", "asc")
    )
  );

  if (authstateLoading || loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link className="flex p-1 rounded-md mb-1 hover:bg-gray-200" href="/">
        <h3 className="truncate font-medium">
          {messages?.docs[0]?.data().searchQuery}
        </h3>
      </Link>
    </div>
  );
};

export default ChatHistoryBox;
