import RenameChatModel from "./rename-chat-model";

const chatHistory = [
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
  "Hi there!",
  "How are you?",
  "I'm doing well, thanks!",
  "What's new?",
  "Not much, just working on a project.",
];

const ChatHistoryBox = () => {
  return (
    <div>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-center mb-4"
        >
          <h3 className="truncate mr-2 font-medium">{message}</h3>
          <div>
            <RenameChatModel />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistoryBox;
