// src/components/ChatInput.tsx
import { useRef, useState } from "react";
import type { Sender } from "../types/message";
import SenderToggle from "./SenderToggle";

type ChatInputProps = {
  className?: string;
  onSend: (text: string, sender: Sender) => void;
};

export default function ChatInput({ className = "", onSend }: ChatInputProps) {
  const [sender, setSender] = useState<Sender>("user");
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isSendDisabled = text.trim() === "";

  const handleSend = () => {
    if (isSendDisabled) return;
    onSend(text.trim(), sender);
    setText("");
    resetTextareaHeight();
  };

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key.toLowerCase() === "enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 6 * 24)}px`;
  };

  const isUser = sender === "user";

  const cardBorder = isUser
    ? "border border-stone-300"
    : "border-2 border-purple-500";

  return (
    <div
      className={`p-4 bg-white rounded-xl shadow-lg ${cardBorder} ${className} transition-colors`}
    >
      <div className="flex items-end gap-2">
        <SenderToggle sender={sender} onToggle={setSender} />

        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma mensagem..."
          rows={1}
          className="flex-1 resize-none border-0 bg-stone-100 rounded-lg px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-purple-400 max-h-24"
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={isSendDisabled}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-500 text-white disabled:bg-stone-300 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
          aria-label="Enviar mensagem"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3.478 2.927a.75.75 0 0 1 .72.246l11.5 11.5a.75.75 0 0 1 0 1.062l-5.5 5.5a.75.75 0 0 1-1.062 0L3.478 14.32a.75.75 0 0 1 0-1.062l11.5-11.5a.75.75 0 0 1 .246-.72l2.5-1.5a.75.75 0 0 1 .78-.04l4.5 2.25a.75.75 0 0 1 .42.673v5.5a.75.75 0 0 1-1.5 0v-4.88L9.25 9.25 3.478 2.927z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
