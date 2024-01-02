import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const chatHistory = [
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
];

const ChatHistoryBox = () => {
  return (
    <div>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-center mb-4"
        >
          <h3 className="truncate mr-2 font-medium">{message}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal className="text-slate-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
};

export default ChatHistoryBox;
