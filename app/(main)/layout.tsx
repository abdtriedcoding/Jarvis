import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import ChatBox from "@/components/chatbox";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <aside className="w-64 p-4 hidden md:block bg-slate-50">
        <Sidebar />
      </aside>
      <main className="flex flex-1 flex-col h-full">
        <Navbar />
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
          <div className="p-4 max-w-4xl mx-auto h-full">{children}</div>
        </div>
        <div className="sticky bottom-0">
          <ChatBox />
        </div>
      </main>
    </div>
  );
}
