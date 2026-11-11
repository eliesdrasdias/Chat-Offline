// src/components/Chat.tsx
import { useChatStore } from "../stores/chatStore";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import Sidebar from "./Sidebar";
import MobileMenuButton from "./MobileMenuButton";

export default function Chat() {
  const { conversations, activeConversationId } = useChatStore();

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );
  const messages = activeConversation?.messages ?? [];
  const isDisabled = activeConversationId === null;

  return (
    <div className="min-h-screen bg-stone-200 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileMenuButton />
        <main className="flex-1 flex p-0 lg:px-8 lg:justify-center">
          <div className="flex-1 min-w-0 flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden w-full lg:max-w-2xl">
            {activeConversation ? (
              <>
                <MessageList messages={messages} />
                <ChatInput className="sticky bottom-0" disabled={isDisabled} />
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <p className="text-stone-500 text-lg">
                  Crie ou selecione uma conversa
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
