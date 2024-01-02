import { UploadIcon } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="justify-between w-full flex">
      <Button size={"lg"}>
        <div className="flex space-x-2">
          <h3>Share chat</h3>
          <UploadIcon className="w-5 h-5" />
        </div>
      </Button>
      <Button size={"lg"}>Log In</Button>
    </nav>
  );
};

export default Navbar;
