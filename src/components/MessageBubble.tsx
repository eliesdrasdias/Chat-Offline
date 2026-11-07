// src/components/MessageBubble.tsx
import type { Message } from "../types/message";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  const alignmentClass = message.sender === "user" ? "self-end" : "self-start";

  return (
    <div className={`${alignmentClass} max-w-[80%]`}>
      <div className="bg-white rounded-lg px-3 py-2 shadow-sm text-stone-800 text-sm leading-relaxed">
        {message.text}
      </div>
    </div>
  );
}