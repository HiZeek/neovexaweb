import { Container } from "@/components/layouts/Container";
import { Section } from "@/components/layouts/Section";
import {
  BoltIcon,
  LayersIcon,
  PublicIcon,
  TargetIcon,
  TuneIcon,
} from "@/components/icons/ConsultingIcons";

const whyItems = [
  {
    title: "Outcome-first",
    body: "Results-driven methodology centered strictly on ROI.",
    icon: TargetIcon,
  },
  {
    title: "Fast execution",
    body: "Rapid deployment cycles for immediate operational impact.",
    icon: BoltIcon,
  },
  {
    title: "Modern stack",
    body: "Leveraging the latest GenAI, Cloud & Automation tools.",
    icon: LayersIcon,
  },
  {
    title: "Bespoke",
    body: "Tailored solutions built specifically for your unique context.",
    icon: TuneIcon,
  },
  {
    title: "Remote-ready",
    body: "Global delivery model with frictionless collaboration.",
    icon: PublicIcon,
  },
];

export function ConsultingWhySection() {
  return (
    <Section
      id="why-us"
      className="border-y border-border-subtle bg-surface-muted/40 px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      <Container className="px-4 sm:px-6">
        <h2 className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-text-secondary sm:mb-16 sm:tracking-[0.3em]">
          The NEOVEXA Advantage
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {whyItems.map((item, i) => (
            <div
              key={i}
              className="glass-card flex flex-col rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8"
            >
              <span className="mb-4 flex h-9 w-9 text-primary [&>svg]:size-9 sm:mb-6 sm:h-10 sm:w-10 [&>svg]:sm:size-10">
                <item.icon />
              </span>
              <h3 className="mb-2 text-lg font-bold text-accent-navy sm:mb-3 sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
