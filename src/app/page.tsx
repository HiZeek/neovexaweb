import { BookACallModalProvider } from "@/components/home/BookACallModal";
import { Footer } from "@/components/layouts/Footer";
import { FooterCTA } from "@/components/home/FooterCTA";
import { HeroSection } from "@/components/home/HeroSection";
import { Navbar } from "@/components/layouts/Navbar";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustBar } from "@/components/home/TrustBar";
import { UseCasesSection } from "@/components/home/UseCasesSection";

export default function Home() {
  return (
    <BookACallModalProvider>
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
    </BookACallModalProvider>
  );
}
