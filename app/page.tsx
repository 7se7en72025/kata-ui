"use client";

import dynamic from "next/dynamic";
import { SideFrame } from "@/components/side-frame";

const Navbar = dynamic(() => import("@/components/navbar").then(m => ({ default: m.Navbar })), { ssr: false });
const Hero = dynamic(() => import("@/components/hero").then(m => ({ default: m.Hero })), { ssr: false });
const ShrineCards = dynamic(() => import("@/components/ui/shrine-cards").then(m => ({ default: m.ShrineCards })), { ssr: false });
const Footer = dynamic(() => import("@/components/footer").then(m => ({ default: m.Footer })), { ssr: false });

const showcaseCards = [
  { id: "1", label: "CODING" },
  { id: "2", label: "EXHIBITIONS" },
  { id: "3", label: "COMPETITIONS" },
  { id: "4", label: "ART & CINEMA" },
  { id: "5", label: "MISCELLANEOUS" },
  { id: "6", label: "E SUMMIT" },
  { id: "7", label: "GAMES & QUIZ" },
];

export default function Home() {
  return (
    <main className="min-h-[300vh] theme-bg relative">
      <Navbar />
      <SideFrame />
      <Hero />
      <section style={{ padding: "60px 120px", position: "relative", zIndex: 10 }}>
        <ShrineCards cards={showcaseCards} defaultActiveIndex={-1} />
      </section>
      <Footer />
    </main>
  );
}
