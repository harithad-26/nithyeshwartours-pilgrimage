import type { Metadata } from "next";
import { ChatInterface } from "@/components/chat/ChatInterface";

export const metadata: Metadata = {
  title: "Sacred Assistant — Plan Your Pilgrimage",
  description:
    "Chat with our AI pilgrimage specialist to design your perfect sacred journey across India's most divine destinations.",
};

export default function ChatPage() {
  return <ChatInterface />;
}
