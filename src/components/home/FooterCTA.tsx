import { Section } from "@/components/layouts/Section";
import { Container } from "@/components/layouts/Container";

export function FooterCTA() {
  return (
    <Section className="bg-accent-navy py-20 text-center lg:py-24">
      <Container className="max-w-4xl">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to automate your growth?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Stop wasting time on manual processes. Talk to our experts and discover what your business
          looks like at scale.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="flex h-14 items-center justify-center rounded-lg bg-primary px-8 text-lg font-bold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:bg-primary-dark">
            Book a Call
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          No commitment required. 30-minute discovery session.
        </p>
      </Container>
    </Section>
  );
}

