'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect, useId } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type SuggestionCard = {
  id: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  description: string;
  duration: string;
};

type MessageBase = {
  id: string;
  timestamp: string;
};

type UserMessage = MessageBase & {
  role: 'user';
  text: string;
};

type BotMessage = MessageBase & {
  role: 'bot';
  text: string;
  suggestions?: SuggestionCard[];
};

type Message = UserMessage | BotMessage;

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------
const WELCOME_SUGGESTIONS: SuggestionCard[] = [
  {
    id: 'sacred-puri',
    badge: 'MOST SERENE',
    imageSrc: '/images/pilgrimage/badrinath.jpg',
    imageAlt: 'Jagannath Temple, Puri — grand temple spires against a blue sky',
    title: 'Sacred Puri',
    price: '₹8,500+',
    description:
      'Experience the divine presence of Lord Jagannath by the calming shores of the Bay of Bengal.',
    duration: '4 Days / 3 Nights',
  },
  {
    id: 'varanasi-soul',
    badge: 'ETERNAL KASHI',
    imageSrc: '/images/india-states/varanasi-ghats.jpg',
    imageAlt: 'Varanasi Ghats — ancient stone steps meeting the sacred Ganga at dusk',
    title: 'Varanasi Soul',
    price: '₹9,200+',
    description:
      'The oldest living city. Witness the Ganga Aarti and find inner peace in narrow spiritual lanes.',
    duration: '4 Days / 3 Nights',
  },
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome-bot',
    role: 'bot',
    timestamp: '',
    text: 'Namaste. For a short 4-day pilgrimage with a mindful budget of ₹10,000, I suggest these soul-stirring destinations. They offer profound spiritual energy and are well-connected for short durations.',
    suggestions: WELCOME_SUGGESTIONS,
  },
];

const QUICK_TAGS = [
  'INCLUDE MEALS',
  'FAMILY FRIENDLY',
  'LUXURY STAYS',
  'CHAR DHAM',
  'KASHI VISHWANATH',
  'LOTUS TEMPLE',
];

// Mock AI responses keyed by keyword patterns
const MOCK_RESPONSES: { pattern: RegExp; text: string; suggestions?: SuggestionCard[] }[] = [
  {
    pattern: /char dham|chardham|uttarakhand/i,
    text: 'The Char Dham Yatra — Yamunotri, Gangotri, Kedarnath, and Badrinath — is one of Hinduism\'s most sacred circuits. The journey typically takes 10–14 days and is best undertaken between May and June, or September and October. Budget ranges from ₹25,000 to ₹60,000 depending on your mode of travel and accommodation.',
    suggestions: [
      {
        id: 'char-dham',
        badge: 'DIVINE CIRCUIT',
        imageSrc: '/images/pilgrimage/badrinath.jpg',
        imageAlt: 'Badrinath Temple nestled in the Himalayas',
        title: 'Char Dham Yatra',
        price: '₹28,500+',
        description:
          'The complete Char Dham circuit — four sacred shrines nestled in the lap of the Himalayas.',
        duration: '12 Days / 11 Nights',
      },
    ],
  },
  {
    pattern: /varanasi|kashi|benares/i,
    text: 'Varanasi, the eternal city on the Ganga, is one of the oldest inhabited cities on Earth. The morning boat ride past the ghats and the evening Ganga Aarti are transformative experiences. A 4-day stay is ideal for a complete spiritual immersion, with packages starting at ₹9,200.',
    suggestions: [
      {
        id: 'varanasi-soul-2',
        badge: 'ETERNAL KASHI',
        imageSrc: '/images/india-states/varanasi-ghats.jpg',
        imageAlt: 'Varanasi Ghats at dawn',
        title: 'Varanasi Soul',
        price: '₹9,200+',
        description:
          'The oldest living city. Witness the Ganga Aarti and find inner peace in narrow spiritual lanes.',
        duration: '4 Days / 3 Nights',
      },
    ],
  },
  {
    pattern: /tamil|south|rameswaram|madurai/i,
    text: 'South India\'s temple trail is a world unto itself. From the towering gopurams of Madurai\'s Meenakshi Amman Temple to the sacred island of Rameswaram and the ancient shore temples of Mahabalipuram — a 7-day spiritual journey through Tamil Nadu is deeply moving.',
    suggestions: [
      {
        id: 'tamil-trail',
        badge: 'ANCIENT TEMPLES',
        imageSrc: '/images/india-states/tamil-nadu.jpg',
        imageAlt: 'Tamil Nadu temple with ornate gopuram towers',
        title: 'Tamil Temple Trail',
        price: '₹18,000+',
        description:
          'A soul-stirring journey through Tamil Nadu\'s most sacred temple towns and ancient pilgrimage sites.',
        duration: '7 Days / 6 Nights',
      },
    ],
  },
];

const DEFAULT_RESPONSE: Omit<BotMessage, 'id' | 'timestamp'> = {
  role: 'bot',
  text: 'Namaste. I understand your aspiration for a meaningful spiritual journey. Could you share a little more — perhaps your preferred region, the duration of your trip, and your approximate budget? This will help me curate the most resonant pilgrimage experience for you.',
};

function getTimestamp(): string {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
}

function getMockResponse(query: string): Omit<BotMessage, 'id' | 'timestamp'> {
  for (const mock of MOCK_RESPONSES) {
    if (mock.pattern.test(query)) {
      return { role: 'bot', text: mock.text, suggestions: mock.suggestions };
    }
  }
  return DEFAULT_RESPONSE;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function BotAvatar() {
  return (
    <div
      aria-hidden="true"
      className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy flex items-center justify-center shadow-ambient"
    >
      {/* Sparkle / AI icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
          fill="#fed65b"
          stroke="#fed65b"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <path
          d="M19 16L19.75 18.25L22 19L19.75 19.75L19 22L18.25 19.75L16 19L18.25 18.25L19 16Z"
          fill="#fed65b"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

function PackageSuggestionCard({ card }: { card: SuggestionCard }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-card flex flex-col">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-midnight/20" aria-hidden="true" />
        <span className="absolute top-4 left-4 bg-gold/90 text-gold-dark font-sans text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-xl">
          {card.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-xl text-midnight font-normal leading-snug">
            {card.title}
          </h3>
          <span className="font-sans font-bold text-base text-gold-dark flex-shrink-0">
            {card.price}
          </span>
        </div>
        <p className="font-sans text-sm text-[#43474e] leading-relaxed line-clamp-2">
          {card.description}
        </p>
        <div className="flex items-center gap-2 pt-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#74777f] flex-shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-sans text-xs font-medium text-[#74777f]">{card.duration}</span>
        </div>
        <Link
          href="/inquiry"
          className="mt-auto pt-3 font-sans text-xs font-bold tracking-widest uppercase text-gold-dark hover:text-navy transition-colors duration-300 focus-visible:outline-gold"
        >
          Enquire About This Package
        </Link>
      </div>
    </article>
  );
}

function UserBubble({ message }: { message: UserMessage }) {
  return (
    <div className="flex justify-end" role="listitem">
      <div
        className="max-w-[70%] bg-surface-low rounded-tl-lg rounded-tr-lg rounded-bl-lg shadow-[0px_10px_15px_rgba(0,31,63,0.04)] px-6 py-5"
        aria-label={`You said: ${message.text}`}
      >
        <p className="font-sans font-medium text-base text-midnight leading-relaxed">
          {message.text}
        </p>
        {message.timestamp && (
          <p className="font-sans text-[10px] font-normal text-[#74777f] tracking-widest uppercase mt-2">
            {message.timestamp} · SENT
          </p>
        )}
      </div>
    </div>
  );
}

function BotBubble({ message }: { message: BotMessage }) {
  return (
    <div className="flex gap-4 items-start" role="listitem">
      <BotAvatar />
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        {/* Text bubble */}
        <div className="bg-white border-l-2 border-gold-dark rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-ambient pl-6 pr-6 py-6">
          <p className="font-sans text-base text-midnight leading-relaxed">{message.text}</p>
        </div>

        {/* Package suggestion cards */}
        {message.suggestions && message.suggestions.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            aria-label="Suggested packages"
          >
            {message.suggestions.map((card) => (
              <PackageSuggestionCard key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-4 items-start" aria-live="polite" aria-label="Guide is typing">
      <BotAvatar />
      <div className="bg-white border-l-2 border-gold-dark rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-ambient pl-6 pr-6 py-5 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-gold-dark opacity-60 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main client component
// ---------------------------------------------------------------------------
export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const listId = useId();

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function generateId() {
    return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: UserMessage = {
      id: generateId(),
      role: 'user',
      text: trimmed,
      timestamp: getTimestamp(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setActiveTag(null);
    setIsTyping(true);

    // Simulate AI response delay (1.2–1.8s)
    const delay = 1200 + Math.random() * 600;
    await new Promise((resolve) => setTimeout(resolve, delay));

    const response = getMockResponse(trimmed);
    const botMsg: BotMessage = {
      ...response,
      id: generateId(),
      timestamp: getTimestamp(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMsg]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(inputValue);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  }

  function handleTagClick(tag: string) {
    setActiveTag(tag === activeTag ? null : tag);
    setInputValue(tag.charAt(0) + tag.slice(1).toLowerCase());
    inputRef.current?.focus();
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-surface">
      {/* ------------------------------------------------------------------ */}
      {/* Hero header                                                          */}
      {/* ------------------------------------------------------------------ */}
      <header className="pt-16 pb-8 px-6 text-center bg-surface border-b border-midnight/5">
        <p className="font-sans text-xs font-normal tracking-[0.1em] uppercase text-gold-dark mb-3">
          Sacred Assistant
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-midnight font-normal tracking-tight mb-4">
          Plan Your Journey
        </h1>
        <p className="font-sans text-sm text-[#43474e] leading-relaxed max-w-md mx-auto">
          Tell our spiritual guide about your aspirations, budget, and time. We will curate a path just
          for you.
        </p>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Chat history                                                         */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-8"
        aria-label="Chat conversation"
      >
        <div className="max-w-3xl mx-auto">
          {/* Message list */}
          <ol
            id={listId}
            className="flex flex-col gap-8"
            aria-label="Messages"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg) =>
              msg.role === 'user' ? (
                <UserBubble key={msg.id} message={msg} />
              ) : (
                <BotBubble key={msg.id} message={msg} />
              ),
            )}
            {isTyping && <TypingIndicator />}
          </ol>

          {/* Scroll anchor */}
          <div ref={messagesEndRef} aria-hidden="true" />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Input area (sticky bottom)                                           */}
      {/* ------------------------------------------------------------------ */}
      <div className="sticky bottom-0 left-0 right-0 backdrop-blur-md bg-surface/90 border-t border-midnight/8 pt-4 pb-6 px-4 sm:px-6 shadow-[0_-4px_20px_rgba(0,31,63,0.06)]">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {/* Input row */}
          <form
            onSubmit={handleSubmit}
            role="search"
            aria-label="Chat with our spiritual guide"
            className="relative flex items-end"
          >
            <label htmlFor="chat-input" className="sr-only">
              Ask your spiritual guide about routes, packages, or pilgrimage themes
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about routes, hotels, or spiritual history..."
              disabled={isTyping}
              aria-disabled={isTyping}
              className="flex-1 resize-none bg-white rounded-lg pl-5 pr-24 py-[14px] font-sans text-base text-midnight placeholder:text-[#74777f] shadow-[0_4px_20px_rgba(0,0,0,0.05)] outline-none focus-visible:ring-2 focus-visible:ring-gold-dark transition-shadow duration-300 disabled:opacity-60 min-h-11 max-h-32 leading-relaxed"
              style={{ overflowY: 'auto' }}
              aria-multiline="true"
            />

            {/* Action buttons */}
            <div className="absolute right-3 bottom-2 flex items-center gap-1">
              {/* Voice (decorative in mock) */}
              <button
                type="button"
                className="p-2 text-[#74777f] hover:text-midnight transition-colors duration-300 rounded focus-visible:outline-2 focus-visible:outline-gold"
                aria-label="Voice input (coming soon)"
                disabled
              >
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="4" y="1" width="8" height="13" rx="4" />
                  <path d="M1 10c0 3.866 3.134 7 7 7s7-3.134 7-7" strokeLinecap="round" />
                  <line x1="8" y1="17" x2="8" y2="19" strokeLinecap="round" />
                </svg>
              </button>

              {/* Send */}
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="bg-navy text-white p-3 rounded flex items-center justify-center hover:bg-midnight transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] focus-visible:outline-2 focus-visible:outline-gold min-h-11 min-w-11"
                aria-label="Send message"
              >
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0.5 0.5L17.5 8L0.5 15.5V9.5L13.5 8L0.5 6.5V0.5Z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Quick-tag chips */}
          <div
            className="flex flex-wrap gap-2 justify-center"
            role="group"
            aria-label="Quick filter tags"
          >
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1.5 rounded-xl font-sans text-[10px] font-bold tracking-[0.05em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-gold ${
                  activeTag === tag
                    ? 'bg-navy text-gold'
                    : 'bg-surface-low text-[#43474e] hover:bg-midnight/10'
                }`}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
