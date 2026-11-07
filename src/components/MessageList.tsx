// src/components/MessageList.tsx
import { useEffect, useRef } from "react";
import type { Message } from "../types/message";
import MessageBubble from "./MessageBubble";

type MessageListProps = {
  messages: Message[];
};

export default function MessageList({ messages }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 pb-12 scrollbar-thin">
      <div className="flex flex-col gap-2">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-stone-500 text-lg">
              Nenhuma mensagem ainda. Envie a primeira!
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}