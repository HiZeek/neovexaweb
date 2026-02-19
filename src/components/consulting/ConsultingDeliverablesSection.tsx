import { Container } from "@/components/layouts/Container";
import { Section } from "@/components/layouts/Section";
import {
  AccountTreeIcon,
  ArchitectureIcon,
  CodeBlocksIcon,
  InsightsIcon,
  MenuBookIcon,
  VerifiedUserIcon,
} from "@/components/icons/ConsultingIcons";

const deliverablesGrid = [
  {
    title: "Detailed Workflow Maps",
    body: "Visual blueprints of your current vs. future automated state.",
    icon: AccountTreeIcon,
  },
  {
    title: "ROI Backlog",
    body: "A prioritized list of automation tasks ranked by effort vs. return.",
    icon: InsightsIcon,
  },
  {
    title: "System Architecture",
    body: "Comprehensive diagrams of integrations, data flow, and security layers.",
    icon: ArchitectureIcon,
  },
  {
    title: "Implementation Runbooks",
    body: "Step-by-step guides for your internal team to maintain the systems.",
    icon: MenuBookIcon,
  },
  {
    title: "Working Prototypes",
    body: "Functional code or low-code solutions deployed in your environment.",
    icon: CodeBlocksIcon,
  },
  {
    title: "Security Documentation",
    body: "Compliance readiness reports and vulnerability assessments.",
    icon: VerifiedUserIcon,
  },
];

export function ConsultingDeliverablesSection() {
  return (
    <Section
      id="deliverables"
      className="bg-surface-muted/50 px-4 py-20 sm:px-6 sm:py-24 md:py-32"
    >
      <Container className="px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-24">
          <h2 className="mb-4 text-3xl font-black text-accent-navy sm:mb-6 sm:text-4xl">
            Concrete Deliverables
          </h2>
          <p className="text-base text-text-secondary sm:text-lg">
            Measurable output you receive at the conclusion of every engagement.
          </p>
        </div>
        <div className="grid gap-y-10 gap-x-8 sm:gap-y-12 sm:gap-x-10 md:gap-x-12 md:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {deliverablesGrid.map((item, i) => (
            <div key={i} className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-white shadow-sm text-primary [&>svg]:size-5 sm:h-12 sm:w-12 sm:rounded-2xl [&>svg]:sm:size-6">
                <item.icon />
              </div>
              <div className="min-w-0">
                <h4 className="mb-2 text-base font-bold text-accent-navy sm:mb-3 sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
