// src/components/SidebarItem.tsx
import { useChatStore } from "../stores/chatStore";

type SidebarItemProps = {
  conversationId: string;
  isActive: boolean;
};

export default function SidebarItem({ conversationId, isActive }: SidebarItemProps) {
  const { selectConversation, deleteConversation } = useChatStore();

  const shortId = conversationId.slice(0, 8);

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
        isActive
          ? "bg-stone-200 font-medium border-l-2 border-purple-500"
          : "hover:bg-stone-100"
      }`}
      onClick={() => selectConversation(conversationId)}
    >
      <span className="text-sm font-mono text-stone-700">{shortId}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          deleteConversation(conversationId);
        }}
        className="flex items-center justify-center w-6 h-6 rounded hover:bg-stone-300 text-stone-500 hover:text-stone-700 transition-colors opacity-0 hover:opacity-100"
        aria-label={`Excluir conversa ${shortId}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
  );
}