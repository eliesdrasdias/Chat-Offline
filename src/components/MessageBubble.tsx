// src/components/MessageBubble.tsx
import type { Message } from "../types/message";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  const alignmentClass = message.sender === "user" ? "self-end" : "self-start";

  return (
    <div className={`${alignmentClass} max-w-[80%] px-4 py-3 rounded-lg bg-white shadow-sm text-stone-800 whitespace-pre-wrap overflow-wrap break-word text-sm leading-relaxed`}>
      {message.text}
    </div>
  );
}
