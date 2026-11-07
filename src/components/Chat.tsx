// src/components/Chat.tsx
export default function Chat() {
  return (
    <div className="min-h-screen bg-stone-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full h-full min-h-150 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        {/* Histórico de mensagens (placeholder Fase 1) */}
        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-center text-stone-500 mt-10">
            Nenhuma mensagem ainda. Envie a primeira!
          </p>
        </div>
      </div>
    </div>
  );
}
