// src/components/SenderToggle.tsx
import type { Sender } from "../types/message";

type SenderToggleProps = {
  sender: Sender;
  onToggle: (sender: Sender) => void;
  disabled?: boolean;
};

export default function SenderToggle({ sender, onToggle, disabled = false }: SenderToggleProps) {
  const isUser = sender === "user";

  const icon = isUser ? "👤" : "🤖";

  const baseClasses =
    "flex items-center justify-center w-10 h-10 rounded-full border text-sm transition-colors";

  const stateClasses = isUser
    ? "border-stone-300 bg-stone-100 text-stone-600 hover:bg-stone-200"
    : "border-purple-500 bg-purple-50 text-purple-700";

  const handleClick = () => {
    if (disabled) return;
    onToggle(isUser ? "robot" : "user");
  };

  return (
    <button
      type="button"
      className={`${baseClasses} ${stateClasses} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span>{icon}</span>
    </button>
  );
}