"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { sendMessage } from "@/lib/chatFunction";
import { User } from "@/types";
import { useRouter } from "next/navigation";

const ChatBox = ({ chatId }: { chatId?: string }) => {
  const { data: session } = useSession();
  const user = session?.user as User;
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(userInput, setUserInput, chatId, setIsLoading, user, router);
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="sticky bottom-0 bg-white z-20 p-4"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Message Jarvis"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Sending" : "Send"}
          </Button>
        </div>
        <p className="text-center text-xs">
        Jarvis can make mistakes. Consider checking important information.
        </p>
      </div>
    </form>
  );
};

export default ChatBox;
