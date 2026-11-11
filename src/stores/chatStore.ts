// src/stores/chatStore.ts
import { create } from "zustand";
import type { Conversation } from "../types/conversation";
import type { Message, Sender } from "../types/message";

type ChatState = {
  conversations: Conversation[];
  activeConversationId: string | null;
  sender: Sender;
  createConversation: () => void;
  selectConversation: (id: string) => void;
  deleteConversation: (id: string) => void;
  addMessage: (text: string) => void;
  toggleSender: () => void;
};

export const useChatStore = create<ChatState>((set, get) => ({
  conversations: [],
  activeConversationId: null,
  sender: "user",

  createConversation: () => {
    const id = crypto.randomUUID();
    const newConversation: Conversation = { id, messages: [] };
    set((state) => ({
      conversations: [...state.conversations, newConversation],
      activeConversationId: id,
    }));
  },

  selectConversation: (id: string) => {
    set({ activeConversationId: id });
  },

  deleteConversation: (id: string) => {
    set((state) => {
      const conversations = state.conversations.filter((c) => c.id !== id);
      const activeConversationId =
        state.activeConversationId === id ? null : state.activeConversationId;
      return { conversations, activeConversationId };
    });
  },

  addMessage: (text: string) => {
    const { activeConversationId, sender, conversations } = get();
    if (!activeConversationId) return;
    const trimmed = text.trim();
    if (trimmed === "") return;

    const conversation = conversations.find((c) => c.id === activeConversationId);
    if (!conversation) return;

    const message: Message = {
      id: crypto.randomUUID(),
      text: trimmed,
      sender,
    };

    set((state) => ({
      conversations: state.conversations.map((c) =>
        c.id === activeConversationId
          ? { ...c, messages: [...c.messages, message] }
          : c
      ),
    }));
  },

  toggleSender: () => {
    set((state) => ({
      sender: state.sender === "user" ? "robot" : "user",
    }));
  },
}));
