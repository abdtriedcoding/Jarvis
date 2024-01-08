"use client";

import { db } from "@/firebase/firebaseConfig";
import { cn } from "@/lib/utils";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useSession } from "next-auth/react";
import { User } from "@/types";
import toast from "react-hot-toast";

const DeleteButton = ({ chatId }: { chatId?: string }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const uid = (session?.user as User)?.id;
  const handelDeleteChat = async () => {
    await deleteDoc(doc(db, `users/${uid}/chats/${chatId}`));
    router.push("/");
    toast.success("Chat deleted successfully")
  };

  return (
    <AlertDialogAction
      onClick={handelDeleteChat}
      className={cn(buttonVariants({ variant: "destructive" }))}
    >
      Continue
    </AlertDialogAction>
  );
};

export default DeleteButton;
