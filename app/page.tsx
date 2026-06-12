import { SideFrame } from "@/components/side-frame";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      <SideFrame />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_30%)]" />
    </main>
  );
}
