import ChatScreen from "@/components/chat-screen";
import ChatBox from "@/components/chatbox";

export default function Home() {
  return (
    <div className="flex flex-col h-[80vh]">
      <div className="flex-1">
        <ChatScreen />
      </div>
      <div className="sticky bottom-0">
        <div className="flex flex-col space-y-2 bg-white z-20">
          <ChatBox />
          <p className="text-center text-xs">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
}
