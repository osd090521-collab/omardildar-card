import { AnimatedGrid } from "@/components/AnimatedGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { ActionButtons } from "@/components/ActionButtons";
import { About } from "@/components/About";
import { IdentityCards } from "@/components/IdentityCards";
import { QRSection } from "@/components/QRSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: "var(--bg)" }}>
      <AnimatedGrid />
      <ThemeToggle />
      <div className="flex flex-col items-center">
        <Hero />
        <ActionButtons />
        <About />
        <IdentityCards />
        <QRSection />
        <Footer />
      </div>
    </main>
  );
}
