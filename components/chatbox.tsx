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
      <div className="flex flex-col space-y-2 p-4 max-w-4xl mx-auto z-20">
        <div className="flex space-x-2">
          <Input type="text" name="search" placeholder="Message chatGPT" />
          <Button type="submit" variant={"outline"}>
            Send
          </Button>
        </div>
        <p className="text-center text-xs">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </form>
  );
};

export default ChatBox;
