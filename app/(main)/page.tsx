import ChatBox from "@/components/chatbox";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between">
      <HeroSection />
      <ChatBox />
    </div>
  );
}
