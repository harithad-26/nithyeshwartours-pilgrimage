"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Message {
  role: "user" | "bot";
  text: string;
}

const SUGGESTION_CARDS = [
  {
    title: "Sacred Puri",
    subtitle: "Jagannath Pilgrimage",
    price: "₹8,500+",
    img: "/images/pilgrimage/badrinath.jpg",
    href: "/packages/odisha",
  },
  {
    title: "Varanasi Soul",
    subtitle: "Eternal City of Kashi",
    price: "₹9,200+",
    img: "/images/pilgrimage/varanasi.jpg",
    href: "/packages/uttar-pradesh",
  },
];

const QUICK_TAGS = ["INCLUDE MEALS", "FAMILY FRIENDLY", "LUXURY STAYS"];

const INITIAL_MESSAGES: Message[] = [
  {
    role: "user",
    text: "4 days trip 10k",
  },
  {
    role: "bot",
    text: "Namaste. For a short 4-day pilgrimage with a mindful budget of ₹10,000, I would recommend the sacred Varanasi circuit — the ghats at dawn, the Kashi Vishwanath Jyotirlinga, and an evening Ganga Aarti that will stay with you for a lifetime. Here are two paths that may call to your soul:",
  },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      {
        role: "bot",
        text: "Our pilgrimage specialists are reviewing your request. Please share more details about your preferred dates and group size, or call us directly for immediate assistance.",
      },
    ]);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Page header */}
      <div className="pt-32 pb-10 px-6 text-center">
        <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
          Sacred Assistant
        </p>
        <h1 className="font-serif text-5xl md:text-[48px] text-midnight font-normal leading-tight">
          Plan Your Journey
        </h1>
      </div>

      {/* Chat area */}
      <div className="flex-1 max-w-3xl w-full mx-auto px-6 pb-48 space-y-6">
        {messages.map((msg, i) => {
          if (msg.role === "user") {
            return (
              <div key={i} className="flex justify-end">
                <div className="max-w-[75%] bg-[#f4f3f2] rounded-2xl rounded-tr-sm px-5 py-4">
                  <p className="font-sans text-sm text-midnight leading-relaxed">
                    {msg.text}
                  </p>
                </div>
              </div>
            );
          }
          return (
            <div key={i} className="flex justify-start">
              <div className="max-w-[85%] bg-white border-l-2 border-[#735c00] rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                <p className="font-sans text-sm text-midnight/80 leading-relaxed">
                  {msg.text}
                </p>
                {/* Suggestion cards shown after bot's second message */}
                {i === 1 && (
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    {SUGGESTION_CARDS.map((card) => (
                      <Link
                        key={card.title}
                        href={card.href}
                        className="group relative rounded-lg overflow-hidden h-36 block focus-visible:outline-2 focus-visible:outline-gold"
                      >
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-midnight/10" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="font-serif text-base text-white font-normal leading-tight">
                            {card.title}
                          </p>
                          <p className="font-sans text-xs text-white/70 mt-0.5">
                            {card.price}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Sticky floating input */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-md border-t border-midnight/10 px-6 py-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {/* Quick tags */}
          <div className="flex gap-2 flex-wrap">
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`font-sans text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border transition-colors duration-200 min-h-[32px] ${
                  activeTag === tag
                    ? "bg-gold-dark text-white border-gold-dark"
                    : "border-midnight/20 text-midnight/60 hover:border-gold-dark hover:text-gold-dark"
                }`}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Input row */}
          <div className="flex gap-3 items-center">
            <label htmlFor="chat-input" className="sr-only">
              Ask about your pilgrimage
            </label>
            <input
              id="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your ideal pilgrimage..."
              className="flex-1 border border-midnight/20 bg-white px-4 py-3 font-sans text-sm text-midnight placeholder:text-midnight/40 outline-none focus:border-gold-dark transition-colors duration-300 rounded-sm min-h-[44px]"
              autoComplete="off"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-navy text-white font-sans font-bold text-xs tracking-[0.1em] uppercase px-6 py-3 rounded-sm transition-colors duration-300 hover:bg-midnight disabled:opacity-40 min-h-[44px] min-w-[80px]"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
