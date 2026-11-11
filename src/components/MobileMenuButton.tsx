// src/components/MobileMenuButton.tsx
import { useState } from "react";
import { useChatStore } from "../stores/chatStore";

export default function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { conversations, activeConversationId, createConversation, selectConversation } = useChatStore();

  const handleCreateConversation = () => {
    createConversation();
    setIsOpen(false);
  };

  const handleSelectConversation = (id: string) => {
    selectConversation(id);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 w-10 h-10 rounded-lg bg-white shadow-lg flex items-center justify-center border border-stone-200 hover:bg-stone-50 transition-colors lg:hidden"
        aria-label="Abrir menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-6 h-6 text-stone-700"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <aside className="fixed top-0 left-0 z-50 w-64 h-dvh bg-stone-100 border-r border-stone-200 flex flex-col lg:hidden">
        <div className="p-4 border-b border-stone-200">
          <button
            type="button"
            onClick={handleCreateConversation}
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
              <div
                key={conv.id}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                  conv.id === activeConversationId
                    ? "bg-stone-200 font-medium"
                    : "hover:bg-stone-100"
                }`}
                onClick={() => handleSelectConversation(conv.id)}
              >
                <span className="text-sm font-mono text-stone-700">
                  {conv.id.slice(0, 8)}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    useChatStore.getState().deleteConversation(conv.id);
                  }}
                  className="flex items-center justify-center w-6 h-6 rounded hover:bg-stone-300 text-stone-500 hover:text-stone-700 transition-colors opacity-0 hover:opacity-100"
                  aria-label={`Excluir conversa ${conv.id.slice(0, 8)}`}
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
            ))
          )}
        </div>
      </aside>
    </>
  );
}