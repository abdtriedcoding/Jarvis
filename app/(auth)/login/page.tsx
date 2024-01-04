import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col space-y-6 text-center items-center justify-center h-full">
      {/* Icon and text */}
      <div className="flex flex-col space-y-2 text-center items-center">
        <Avatar className="w-28 h-28">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-medium">
          Authenticate yourself, or stay on the sidelines😉 !
        </h1>
      </div>
      {/* Login BUtton */}
      <Button size={"lg"}>Login with Google</Button>
    </div>
  );
};

export default Page;
