import { BookACallTrigger } from "@/components/home/BookACallModal";
import { Container } from "@/components/layouts/Container";
import { Section } from "@/components/layouts/Section";

export function ConsultingHeroSection() {
  return (
    <Section
      id="overview"
      className="relative overflow-x-hidden px-4 pt-24 pb-24 sm:px-6 sm:pt-28 sm:pb-32 md:pt-32 md:pb-40"
    >
      {/* Decorative ribbons – wrapped and clipped so they don’t cause horizontal scroll on mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="fluid-ribbon -left-40 -top-20 h-[400px] w-[600px] rounded-full"
          aria-hidden
        />
        <div
          className="fluid-ribbon -right-40 top-[20%] h-[500px] w-[700px] rounded-full"
          aria-hidden
        />
      </div>
      <Container className="relative max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-8 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm sm:mb-12">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Next-Gen Operational Consulting
          </div>
          <h1 className="mb-6 text-3xl font-black leading-[1.1] tracking-tight text-accent-navy sm:mb-8 sm:text-4xl md:mb-10 md:text-5xl md:leading-[1.05] lg:text-7xl xl:text-8xl">
            Practical consulting that turns messy operations into{" "}
            <span className="text-gradient-primary">automated systems.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-text-secondary sm:mb-12 md:mb-16 md:text-lg lg:text-2xl">
            Integrating Generative AI and intelligent automation to build high-performance,
            future-proof infrastructures for growth-stage enterprises.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:gap-6">
            <BookACallTrigger className="min-h-[48px] w-full rounded-2xl bg-accent-navy px-6 py-4 font-bold text-white shadow-2xl shadow-accent-navy/10 transition-all hover:bg-accent-navy/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto sm:px-10 sm:py-5">
              Book a Call
            </BookACallTrigger>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@neovexa.com"
              className="min-h-[48px] w-full rounded-2xl border border-border-subtle bg-white px-6 py-4 font-bold text-text-primary shadow-sm transition-all hover:border-primary/30 hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto sm:px-10 sm:py-5"
            >
              Request a Proposal
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
