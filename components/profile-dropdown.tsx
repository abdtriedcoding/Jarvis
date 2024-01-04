import { LogOutIcon } from "lucide-react";
import DeleteAllChatModal from "./delete-allchat-modal";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import Link from "next/link";

const ProfileDropdown = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex p-1 rounded-md space-x-2 cursor-pointer items-center text-center bg-gray-100 hover:bg-gray-200">
          {/* Avatar */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* New chat */}
          <h3 className="font-medium">Abdullah</h3>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-0">
        {/* Toggle Theme */}
        <div className="flex items-center space-x-2 p-2">
          <Switch id="toggle-theme" />
          <Label className="text-md font-medium" htmlFor="toggle-theme">
            Toggle Theme
          </Label>
        </div>
        <DeleteAllChatModal />
        <Separator />
        {/* Logout button */}
        <Link href={"/"}>
          <div className="flex space-x-2 items-center text-center cursor-pointer hover:bg-gray-200 p-2">
            <LogOutIcon className="w-5 h-5" />
            <h3 className="text-md font-medium">Logout</h3>
          </div>
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileDropdown;
