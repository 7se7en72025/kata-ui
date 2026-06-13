"use client";

import { SideFrame } from "@/components/side-frame";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ShrineCards } from "@/components/ui/shrine-cards";
import { Footer } from "@/components/footer";

const showcaseCards = [
  { id: "1", image: "/components/preview1.jpg", label: "ANIMATED BUTTON", category: "BUTTON" },
  { id: "2", image: "/components/preview2.jpg", label: "GLOW BUTTON", category: "BUTTON" },
  { id: "3", image: "/components/preview3.jpg", label: "LIQUID METAL", category: "TEXT" },
  { id: "4", image: "/components/preview4.jpg", label: "SHRINE CARDS", category: "LAYOUT" },
  { id: "5", image: "/components/preview5.jpg", label: "ANIMATED RAYS", category: "BACKGROUND" },
  { id: "6", image: "/components/preview6.jpg", label: "SIDE FRAME", category: "FRAME" },
];

export default function Home() {
  return (
    <main className="min-h-[300vh] theme-bg relative">
      <Navbar />
      <SideFrame />
      <Hero />
      <section style={{ padding: "60px 120px", position: "relative", zIndex: 10 }}>
        <ShrineCards cards={showcaseCards} defaultActiveIndex={0} />
      </section>
      <Footer />
    </main>
  );
}
