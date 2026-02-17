import { Navbar } from "@/components/home/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FooterCTA } from "@/components/home/FooterCTA";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="bg-background-light text-text-primary">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <TrustBar />
        <SolutionsSection />
        <ProcessSection />
        <UseCasesSection />
        <TestimonialsSection />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}
