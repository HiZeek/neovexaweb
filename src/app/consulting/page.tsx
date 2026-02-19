import type { Metadata } from "next";
import { BookACallModalProvider } from "@/components/home/BookACallModal";
import { Footer } from "@/components/layouts/Footer";
import { FooterCTA } from "@/components/home/FooterCTA";
import { Navbar } from "@/components/layouts/Navbar";
import { ConsultingDeliverablesSection } from "@/components/consulting/ConsultingDeliverablesSection";
import { ConsultingEngagementSection } from "@/components/consulting/ConsultingEngagementSection";
import { ConsultingHeroSection } from "@/components/consulting/ConsultingHeroSection";
import { ConsultingRemoteSection } from "@/components/consulting/ConsultingRemoteSection";
import { ConsultingServicesSection } from "@/components/consulting/ConsultingServicesSection";
import { ConsultingWhySection } from "@/components/consulting/ConsultingWhySection";

export const metadata: Metadata = {
  title: "Consulting | Neovexa",
  description:
    "Practical consulting that turns messy operations into automated, scalable systems. GenAI, workflow automation, and modern web technology.",
};

export default function ConsultingPage() {
  return (
    <BookACallModalProvider>
      <div className="bg-background-light font-sans text-text-primary antialiased">
        <Navbar />
        <main className="relative overflow-x-hidden pt-16">
          <ConsultingHeroSection />
          <ConsultingWhySection />
          <ConsultingServicesSection />
          <ConsultingEngagementSection />
          <ConsultingRemoteSection />
          <ConsultingDeliverablesSection />
          <FooterCTA />
        </main>
        <Footer />
      </div>
    </BookACallModalProvider>
  );
}
