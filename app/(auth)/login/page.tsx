import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LoginButton from "../_components/login-button";

const Page = () => {
  return (
    <div className="flex flex-col space-y-6 text-center items-center justify-center h-full">
      <div className="flex flex-col space-y-2 text-center items-center">
        <Avatar className="w-28 h-28">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-medium">
          Authenticate yourself, or stay on the sidelines😉 !
        </h1>
      </div>
      <LoginButton />
    </div>
  );
};

export default Page;
