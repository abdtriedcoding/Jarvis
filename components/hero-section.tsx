import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <div className="flex flex-col space-y-2 text-center items-center justify-center h-full p-4">
      <Avatar className="w-28 h-28">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-xl font-medium">How can I help you today?</h1>
    </div>
  );
};

export default HeroSection;
