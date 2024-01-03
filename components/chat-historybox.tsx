import Link from "next/link";

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
        <Link
          className="flex p-1 rounded-md mb-1 hover:bg-gray-200"
          key={index}
          href="/"
        >
          <h3 className="truncate font-medium">{message}</h3>
        </Link>
      ))}
    </div>
  );
};

export default ChatHistoryBox;
