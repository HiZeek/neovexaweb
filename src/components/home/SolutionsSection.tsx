import { Section } from "@/components/layouts/Section";
import { Container } from "@/components/layouts/Container";
import {
  ActionTreeIcon,
  SmartToyIcon,
  SupportAgentIcon,
  CloudIcon,
  SchemaIcon,
  ApiIcon,
} from "@/components/icons/SolutionIcons";

export function SolutionsSection() {
  return (
    <Section id="solutions" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] -top-[20%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary-accent/10 blur-3xl" />
      </div>

      <Container className="relative z-10 max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-primary">
            Our Expertise
          </h2>
          <p className="mt-2 text-3xl font-black tracking-tight text-accent-navy sm:text-4xl">
            Engineered for Scalability
          </p>
          <p className="mt-4 text-lg text-text-secondary">
            We build modular, resilient systems that grow with your business. Select a solution to
            accelerate your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white/70 p-8 shadow-glass transition-all hover:-translate-y-1 hover:shadow-glass-hover backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5 shrink-0 text-current" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-accent-navy">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

const solutions = [
  {
    icon: ActionTreeIcon,
    title: "Workflow Automation",
    description:
      "Eliminate manual data entry and repetitive tasks. We connect your disparate tools into a unified, self-driving ecosystem.",
  },
  {
    icon: SmartToyIcon,
    title: "AI Chatbots & Agents",
    description:
      "Deploy 24/7 intelligent support agents trained on your specific business knowledge to handle inquiries instantly.",
  },
  {
    icon: SupportAgentIcon,
    title: "AI Receptionist",
    description:
      "Never miss a lead. Our voice AI handles inbound calls, qualifies prospects, and schedules appointments directly.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Engineering",
    description:
      "Scalable, secure, and cost-effective cloud infrastructure design on AWS, Azure, or GCP tailored to your needs.",
  },
  {
    icon: SchemaIcon,
    title: "Data Pipelines",
    description:
      "Clean, reliable data flow. We build ETL pipelines that aggregate your business intelligence into a single source of truth.",
  },
  {
    icon: ApiIcon,
    title: "API Integration",
    description:
      "Bridge the gap between your legacy software and modern tools with custom, secure API development.",
  },
] as const;
