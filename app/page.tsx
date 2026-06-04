import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TradingEngine from "@/components/TradingEngine";
import BurnMechanism from "@/components/BurnMechanism";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Features />
      <TradingEngine />
      <BurnMechanism />
      <Tokenomics />
      <Roadmap />
    </main>
  );
}
