# Chat Offline — Multichat

Aplicação de chat com **suporte a múltiplas conversas**, **100% client-side**, onde o usuário alterna entre dois remetentes — **Usuário** (alinhado à direita) e **Robô** (alinhado à esquerda). Cada conversa mantém seu próprio histórico de mensagens, persistido no `localStorage` via Zustand.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5-3178C6?logo=zustand&logoColor=white)
![Oxlint](https://img.shields.io/badge/Oxlint-0-FFD700?logo=oxlint&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Objetivo do Projeto

Demonstrar domínio de **React moderno** (hooks, componentização, TypeScript estrito), **gerenciamento de estado com Zustand** e **boas práticas de front-end**: arquitetura limpa, acessibilidade, performance e código mantenível — tudo em um projeto pequeno, porém completo.

---

## ✨ Funcionalidades

| Funcionalidade               | Descrição                                                                 |
| ---------------------------- | ------------------------------------------------------------------------- |
| **Múltiplas conversas**      | Crie, selecione e exclua conversas independentes, cada uma com seu histórico |
| **Persistência**             | Conversas salvas no `localStorage` (apenas o campo `conversations`) via `zustand/middleware` |
| **Alternância de remetente** | Toggle (ícone) para enviar como _Usuário_ ou _Robô_                      |
| **Auto-scroll**              | Scroll suave para a última mensagem ao enviar                             |
| **Textarea inteligente**     | Altura dinâmica (1–6 linhas), `Enter` envia, `Shift+Enter` quebra linha   |
| **Validação de envio**       | Botão desabilitado enquanto o campo estiver vazio (após `trim`)           |
| **Feedback visual**          | Borda roxa no card de input quando modo _Robô_ ativo                      |
| **Estado vazio**             | Mensagem acolhedora quando não há histórico                               |
| **Layout responsivo**        | Container `max-w-2xl` centralizado, altura total da viewport              |

---

## 🛠 Stack & Ferramentas

| Categoria       | Tecnologia                                                              |
| --------------- | ----------------------------------------------------------------------- |
| **Framework**   | React 19 + TypeScript 5                                                 |
| **Build**       | Vite 8                                                                  |
| **Estado**      | Zustand 5 com middleware `persist`                                      |
| **Estilização** | Tailwind CSS 4 (utility-first, sem CSS customizado)                     |
| **Lint**        | Oxlint (rápido, zero config, compatível ESLint)                         |
| **Tipagem**     | `type` (não `interface`) em `src/types/`                                |
| **Arquitetura** | Store global (`src/stores/chatStore.ts`), componentes pequenos          |

---

## 📁 Estrutura de Pastas

```
src/
├── types/
│   ├── conversation.ts     # Conversation
│   └── message.ts          # Sender, Message
├── stores/
│   └── chatStore.ts        # Zustand store com persistência
├── components/
│   ├── Chat.tsx            # Orquestra estado e layout
│   ├── MessageList.tsx     # Lista + estado vazio + auto-scroll
│   ├── MessageBubble.tsx   # Bolha individual (alinhamento L/R)
│   ├── ChatInput.tsx       # Card fixo: toggle + textarea + botão
│   ├── SenderToggle.tsx    # Botão ícone (usuário/robô)
│   ├── Sidebar.tsx         # Lista de conversas + nova conversa
│   ├── SidebarItem.tsx     # Item de conversa com selecionar/excluir
│   └── MobileMenuButton.tsx # Menu mobile com lista de conversas
├── App.tsx                 # Renderiza <Chat />
└── index.css               # Tailwind imports + scrollbar custom
```

---

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento (HMR)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Lint (Oxlint)
npm run lint
```

---

## 💾 Persistência

O estado é persistido com o middleware `persist` do Zustand:

- **Chave do localStorage:** `chat-storage`
- **Campo persistido:** apenas `conversations` (via `partialize`)
- **Não persistido:** `activeConversationId`, `sender` e as ações da store

Isso significa que ao recarregar a página, suas conversas e mensagens são recuperadas, mas a conversa ativa volta a ser `null` e o remetente volta para `user`.

---

## 🎨 Decisões de Design & UX

- **Fundo marrom claro** (`bg-stone-200`) para fugir do padrão "branco/cinza" de dashboards
- **Bolhas neutras** (branco + sombra sutil) — sem cores por remetente, priorizando legibilidade
- **Toggle apenas com ícone** (👤/🤖) — limpo, acessível via `aria-label` no botão de enviar
- **Transições suaves** (`transition-colors`) na borda do input ao alternar modo
- **Scrollbar customizada** (Tailwind `scrollbar-thin`) para integração visual

---

## ♿ Acessibilidade

- Botões com `type="button"` e `aria-label` descritivos
- Contraste AA em todos os estados (texto, bordas, foco)
- Navegação por teclado completa (Tab, Enter, Shift+Enter)
- `focus-visible` rings visíveis (roxo) para usuários de teclado

---

## 📄 Licença

MIT — sinta-se à vontade para usar, estudar e adaptar.

---

> **Feito com intenção** para demonstrar React moderno, TypeScript estrito e Tailwind CSS em um projeto realista, pequeno e bem acabado.
