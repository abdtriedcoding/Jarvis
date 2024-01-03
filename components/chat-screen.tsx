import { ArrowDownCircle, CopyIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ChatScreen = () => {
  const messages = [
    {
      isChatGPT: false,
      person: "You",
      text: "Hi ChatGPT! I'm doing well. Just checking in.",
      image: "https://github.com/shadcn.png",
    },
    {
      isChatGPT: true,
      person: "ChatGPT",
      text: "That's great to hear! Anything specific you'd like help with?",
      image:
        "https://yt3.ggpht.com/wDwyoG0x4N9D0ihYzRNxCNrJPgoO6cAU8IkBU2CNhrj6aKXxCPzy_gqS_1gOrRxwhgofEQTxT4s=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      isChatGPT: false,
      person: "You",
      text: "I'm just browsing the web and stumbled upon something interesting.",
      image: "https://github.com/shadcn.png",
    },
    {
      isChatGPT: true,
      person: "ChatGPT",
      text: "That sounds intriguing! What did you find?",
      image:
        "https://yt3.ggpht.com/wDwyoG0x4N9D0ihYzRNxCNrJPgoO6cAU8IkBU2CNhrj6aKXxCPzy_gqS_1gOrRxwhgofEQTxT4s=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      isChatGPT: false,
      person: "You",
      text: "I found an interesting article on artificial intelligence and its applications.",
      image: "https://github.com/shadcn.png",
    },
    {
      isChatGPT: true,
      person: "ChatGPT",
      text: "That's a fascinating topic! What specific information are you looking for?",
      image:
        "https://yt3.ggpht.com/wDwyoG0x4N9D0ihYzRNxCNrJPgoO6cAU8IkBU2CNhrj6aKXxCPzy_gqS_1gOrRxwhgofEQTxT4s=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      isChatGPT: false,
      person: "You",
      text: "I'm curious about the recent advancements in natural language processing.",
      image: "https://github.com/shadcn.png",
    },
    {
      isChatGPT: true,
      person: "ChatGPT",
      text: "NLP has made significant strides! Would you like a summary or specific details?",
      image:
        "https://yt3.ggpht.com/wDwyoG0x4N9D0ihYzRNxCNrJPgoO6cAU8IkBU2CNhrj6aKXxCPzy_gqS_1gOrRxwhgofEQTxT4s=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      isChatGPT: false,
      person: "You",
      text: "A summary would be great. Thanks!",
      image: "https://github.com/shadcn.png",
    },
    {
      isChatGPT: true,
      person: "ChatGPT",
      text: "Sure! In summary, NLP involves the interaction between computers and human language. It has applications in various fields, including chatbots, translation, and sentiment analysis.",
      image:
        "https://yt3.ggpht.com/wDwyoG0x4N9D0ihYzRNxCNrJPgoO6cAU8IkBU2CNhrj6aKXxCPzy_gqS_1gOrRxwhgofEQTxT4s=s48-c-k-c0x00ffffff-no-rj",
    },
    // Repeat the above block to add more messages
  ];

  return (
    <div className="flex-1 py-8">
      {messages.map((message, index) => (
        <div key={index} className="pb-5">
          <div className="flex space-x-2 items-center text-center">
            <Avatar>
              <AvatarImage src={message.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="font-medium">{message.person}</h2>
          </div>
          <div className="ml-12 space-y-2">
            <p className="text-sm">{message.text}</p>
            {message.isChatGPT && (
              <div className="flex space-x-3 items-center text-center">
                <CopyIcon className="w-4 h-4 cursor-pointer" />
                <ArrowDownCircle className="w-4 h-4 cursor-pointer" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatScreen;
