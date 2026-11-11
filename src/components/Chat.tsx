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
        <main className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div className="max-w-2xl w-full h-[calc(100dvh-2rem)] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <MessageList messages={messages} />
            <ChatInput className="sticky bottom-0" disabled={isDisabled} />
          </div>
        </main>
      </div>
    </div>
  );
}
