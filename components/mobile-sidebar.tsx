import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import ChatHistoryBox from "./chat-historybox";

const chatHistory = [
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
];

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"}>
          <MenuIcon className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        <SheetHeader>
          <SheetTitle>Chat History</SheetTitle>
        </SheetHeader>
        <ChatHistoryBox />
      </SheetContent>
    </Sheet>
  );
}
