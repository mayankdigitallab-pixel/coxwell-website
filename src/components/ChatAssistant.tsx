"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "Which panel suits a 5,000 m² industrial roof?",
  "Difference between Prism and Multicell?",
  "How do I get a quote for a façade?",
];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello — I'm the Coxwell engineering assistant. Ask me about products, specs, applications, or how to start a project.",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    if (!text.trim() || sending) return;
    const next: Message[] = [...messages, { role: "user", content: text.trim() }];
    setMessages(next);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m.role !== "assistant" || messages.indexOf(m) > 0) }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply ?? data.error ?? "Sorry, something went wrong. Please email specify@coxwell.in.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Network error. Please email specify@coxwell.in." },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat assistant"
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#111110] text-[#fafaf7] shadow-lg hover:bg-[#4a4a47] transition-colors"
        >
          <MessageCircle size={18} />
          <span className="text-sm font-medium">Ask Coxwell</span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-md h-[600px] max-h-[calc(100vh-3rem)] bg-[#fafaf7] rounded-2xl shadow-2xl border border-[#d9d6cc] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#d9d6cc] bg-[#111110] text-[#fafaf7]">
            <div>
              <p className="font-display text-lg leading-none">Coxwell AI</p>
              <p className="text-xs text-[#fafaf7]/60 mt-0.5">Engineering assistant</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-full hover:bg-[#fafaf7]/10"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-[#111110] text-[#fafaf7] rounded-br-md"
                      : "bg-[#f1ede4] text-[#111110] rounded-bl-md"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="bg-[#f1ede4] text-[#4a4a47] px-4 py-2.5 rounded-2xl rounded-bl-md text-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.3s]" />
                  </span>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="pt-4 space-y-2">
                <p className="label text-[#4a4a47]">Try asking</p>
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full text-left px-3 py-2.5 rounded-xl bg-white border border-[#d9d6cc] text-sm text-[#111110] hover:bg-[#f1ede4] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-[#d9d6cc] p-3 bg-[#fafaf7]"
          >
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Ask about products, specs, applications…"
                rows={1}
                className="flex-1 resize-none px-3 py-2.5 bg-white border border-[#d9d6cc] rounded-xl text-sm text-[#111110] placeholder-[#4a4a47] focus:outline-none focus:border-[#111110] max-h-32"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                className="p-2.5 rounded-xl bg-[#111110] text-[#fafaf7] hover:bg-[#4a4a47] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-[#4a4a47] mt-2 px-1">
              AI can be wrong. For binding specs email specify@coxwell.in.
            </p>
          </form>
        </div>
      )}
    </>
  );
}
