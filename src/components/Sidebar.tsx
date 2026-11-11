// src/components/Sidebar.tsx
import { useChatStore } from "../stores/chatStore";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { conversations, activeConversationId, createConversation } =
    useChatStore();

  return (
    <div className="w-64 h-dvh bg-stone-100 border-r border-stone-200 flex flex-col">
      <div className="p-4 border-b border-stone-200">
        <button
          type="button"
          onClick={createConversation}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Nova conversa
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="px-4 py-8 text-center text-stone-500 text-sm">
            Nenhuma conversa ainda
          </div>
        ) : (
          conversations.map((conv) => (
            <SidebarItem
              key={conv.id}
              conversationId={conv.id}
              isActive={conv.id === activeConversationId}
            />
          ))
        )}
      </div>
    </div>
  );
}