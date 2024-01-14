import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import ChatHistoryBox from "./chat-historybox";


export function MobileSidebar({ chatId }: { chatId: string }) {
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
        <ChatHistoryBox chatId={chatId} />
      </SheetContent>
    </Sheet>
  );
}
