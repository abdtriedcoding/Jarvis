import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FileEdit } from "lucide-react";

const RenameChatModel = () => {
  async function handelSubmit(formData: FormData) {
    "use server";
    await new Promise(resolve => setTimeout(resolve, 5000));
    let chatname = formData.get("name");

    console.log(chatname);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FileEdit className="w-4 h-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rename Chat</DialogTitle>
          <DialogDescription>
            Rename chat here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <form action={handelSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                name="name"
                value="Pedro Duarte"
                className="col-span-3"
              />
            </div>
          </div>
          <Button type="submit">Save changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameChatModel;
