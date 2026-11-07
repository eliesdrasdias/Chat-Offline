// src/components/Chat.tsx
import { useState } from "react";
import type { Message, Sender } from "../types/message";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string, sender: Sender) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      text,
      sender,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="min-h-screen bg-stone-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full h-full min-h-150 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <MessageList messages={messages} />
        <ChatInput className="sticky bottom-0" onSend={handleSend} />
      </div>
    </div>
  );
}
