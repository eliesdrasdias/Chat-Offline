// src/components/SenderToggle.tsx
import type { Sender } from "../types/message";

type SenderToggleProps = {
  sender: Sender;
  onToggle: (sender: Sender) => void;
};

export default function SenderToggle({ sender, onToggle }: SenderToggleProps) {
  const isRobot = sender === "robot";

  const toggleLabel = isRobot ? "Robô" : "Você";
  const icon = isRobot ? "🤖" : "👤";

  const baseClasses =
    "flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-medium transition-colors";

  const stateClasses = isRobot
    ? "border-purple-500 bg-purple-50 text-purple-700"
    : "border-stone-300 bg-stone-100 text-stone-600 hover:bg-stone-200";

  const handleClick = () => {
    onToggle(isRobot ? "user" : "robot");
  };

  return (
    <button type="button" className={`${baseClasses} ${stateClasses}`} onClick={handleClick}>
      <span>{icon}</span>
      <span>{toggleLabel}</span>
    </button>
  );
}