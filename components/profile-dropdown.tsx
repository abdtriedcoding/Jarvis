import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="flex p-1 rounded-md space-x-2 items-center text-center bg-gray-50 hover:bg-gray-100">
          {/* Avatar */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* New chat */}
          <h3 className="font-medium">Abdullah</h3>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[15rem]">
        <DropdownMenuItem>Setting</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
