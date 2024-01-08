import { TrashIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { db } from "@/firebase/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { User } from "@/types";
import { redirect } from "next/navigation";
import DeleteButton from "./delete-button";

const DeleteChatModal = async ({ chatId }: { chatId?: string }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <div className="flex sm:space-x-2">
            <h3 className="sm:block hidden">Delete chat</h3>
            <TrashIcon className="w-5 h-5" />
          </div>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to delete the chat?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            chat.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <DeleteButton chatId={chatId}/>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteChatModal;
