"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { send } from "@/app/actions";

const ChatBox = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData: FormData) => {
        const search = formData.get("search");
        ref.current?.reset();
        const ans = await send(search);
        console.log(ans);
      }}
    >
      <div className="flex space-x-2">
        <Input type="text" name="search" placeholder="Message chatGPT" />
        <Button type="submit" variant={"outline"}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default ChatBox;
