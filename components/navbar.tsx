import { UploadIcon } from "lucide-react";
import { Button } from "./ui/button";
import DeleteChatModal from "./delete-chat-modal";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 shadow-sm sticky top-0 z-20 p-4">
      <div className="justify-between w-full flex">
        <Button variant={"outline"} size={"lg"}>
          <div className="flex space-x-2">
            <h3>Share chat</h3>
            <UploadIcon className="w-5 h-5" />
          </div>
        </Button>
            <DeleteChatModal />
      </div>
    </nav>
  );
};

export default Navbar;
