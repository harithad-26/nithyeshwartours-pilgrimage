import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Insights — Admin",
  description: "Nithyeshwar Tours internal management console.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
