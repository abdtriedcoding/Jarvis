import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileEditIcon } from "lucide-react";

const RenameChatModel = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <div className="flex sm:space-x-2">
            <h3 className="sm:block hidden">Rename chat</h3>
            <FileEditIcon className="w-5 h-5" />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rename Chat</DialogTitle>
          <DialogDescription>
            Rename chat here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <p>This is under development</p>
      </DialogContent>
    </Dialog>
  );
};

export default RenameChatModel;
