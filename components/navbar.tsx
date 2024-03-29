import DeleteChatModal from "./delete-chat-modal";
import { MobileSidebar } from "./mobile-sidebar";
import RenameChatModel from "./rename-chat-model";

const Navbar = ({ chatId }: { chatId: string }) => {
  return (
    <nav className="bg-gray-50 shadow-sm sticky top-0 z-20 p-4">
      <div className="flex justify-between items-center w-full">
        <div className="md:hidden block">
          <MobileSidebar chatId={chatId} />
        </div>
        <div className="flex md:justify-between justify-end w-full items-center space-x-3">
          <RenameChatModel />
          <DeleteChatModal chatId={chatId} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
