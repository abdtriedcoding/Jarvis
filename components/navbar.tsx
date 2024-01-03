import DeleteChatModal from "./delete-chat-modal";
import RenameChatModel from "./rename-chat-model";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 shadow-sm sticky top-0 z-20 p-4">
      <div className="justify-between w-full flex">
        <RenameChatModel />
        <DeleteChatModal />
      </div>
    </nav>
  );
};

export default Navbar;
