import ChatScreen from "@/components/chat-screen";
import ChatBox from "@/components/chatbox";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <ChatScreen />
      <ChatBox />
    </div>
  );
}
