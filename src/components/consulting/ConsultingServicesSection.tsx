import { Container } from "@/components/layouts/Container";
import { Section } from "@/components/layouts/Section";
import {
  CheckCircleIcon,
  CloudIcon,
  ExtensionIcon,
  PsychologyIcon,
  SearchInsightsIcon,
  SettingsIcon,
  WebIcon,
} from "@/components/icons/ConsultingIcons";

const servicesGrid = [
  {
    title: "Rapid Discovery",
    purpose:
      "Uncover systemic bottlenecks and map immediate automation opportunities.",
    icon: SearchInsightsIcon,
    items: [
      "Workflow Audit & Gap Analysis",
      "Technical Debt Assessment",
      "High-Impact Roadmap",
    ],
  },
  {
    title: "AI Readiness",
    purpose: "Prepare data architecture and team culture for GenAI integration.",
    icon: PsychologyIcon,
    items: [
      "Data Structuring & Cleaning",
      "LLM Governance Frameworks",
      "Custom Model Selection",
    ],
  },
  {
    title: "Workflow Automation",
    purpose:
      "End-to-end automation of repetitive high-volume business processes.",
    icon: SettingsIcon,
    items: [
      "Custom iPaaS Integrations",
      "Auto-Reporting Dashboards",
      "Human-in-the-loop Systems",
    ],
  },
  {
    title: "Micro-SaaS/Extensions",
    purpose:
      "Build niche internal tools or browser extensions for specific workflows.",
    icon: ExtensionIcon,
    items: [
      "Chrome Productivity Add-ons",
      "Lightweight Internal APIs",
      "Slack/Teams Custom Bot Ops",
    ],
  },
  {
    title: "Web Modernization",
    purpose: "Transform legacy web apps into fast, modern experiences.",
    icon: WebIcon,
    items: [
      "Frontend Re-platforming (Next.js)",
      "Headless CMS Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Cloud Infrastructure",
    purpose: "Reliable, secure, and auto-scaling cloud foundations.",
    icon: CloudIcon,
    items: [
      "Infrastructure as Code (IaC)",
      "Security Hardening & CI/CD",
      "Serverless Architecture",
    ],
  },
];

export function ConsultingServicesSection() {
  return (
    <Section id="services" className="px-4 py-20 sm:px-6 sm:py-28 md:py-40">
      <Container className="px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 md:mb-24">
          <h2 className="mb-4 text-3xl font-black text-accent-navy sm:mb-6 sm:text-4xl md:text-5xl">
            Consulting Services
          </h2>
          <p className="text-base text-text-secondary sm:text-lg">
            Specialized engineering and strategic guidance to modernize your core
            operations.
          </p>
          <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-linear-to-r from-primary to-primary-deep sm:mt-8" />
        </div>
        <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {servicesGrid.map((svc, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 sm:rounded-3xl sm:p-8 md:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-muted text-primary transition-colors group-hover:bg-primary/5 [&>svg]:size-6 sm:mb-8 sm:h-14 sm:w-14 sm:rounded-2xl [&>svg]:sm:size-8">
                <svc.icon />
              </div>
              <h3 className="mb-3 text-xl font-bold text-accent-navy sm:mb-4 sm:text-2xl">
                {svc.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary sm:mb-8">
                <span className="font-bold text-text-primary">Purpose:</span>{" "}
                {svc.purpose}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {svc.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm font-medium text-text-secondary"
                  >
                    <span className="mt-0.5 shrink-0 text-primary [&>svg]:size-5">
                      <CheckCircleIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
