import { TrashIcon, UploadIcon } from "lucide-react";
import { Button } from "./ui/button";

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
        <Button variant={"destructive"} size={"lg"}>
          <div className="flex space-x-2">
            <h3>Delete chat</h3>
            <TrashIcon className="w-5 h-5" />
          </div>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
