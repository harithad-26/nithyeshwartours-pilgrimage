import type { Metadata } from "next";
import NepalPackagesClient from "@/components/nepal/NepalPackagesClient";

export const metadata: Metadata = {
  title: "Nepal Tour Packages — Sacred Yatras & Himalayan Escapes",
  description:
    "Embark on a transcendent journey beyond borders. Discover our comprehensive Nepal pilgrimage and leisure packages, from Pashupatinath and Muktinath to Pokhara and Chitwan.",
};

export default function NepalPage() {
  return <NepalPackagesClient />;
}
