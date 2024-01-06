import ChatBox from "@/components/chatbox";
import HeroSection from "@/components/hero-section";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex h-full">
      <aside className="w-64 p-4 hidden md:block bg-slate-50">
        <Sidebar />
      </aside>
      <div className="flex-1">
        <div className="h-full flex flex-col justify-between">
          <HeroSection />
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
