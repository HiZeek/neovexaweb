import { Section } from "@/components/layouts/Section";
import { Container } from "@/components/layouts/Container";
import {
  RocketIcon,
  SecurityIcon,
  CodeIcon,
  TrendingUpIcon,
} from "@/components/icons/TrustBarIcons";

const trustItems = [
  {
    icon: RocketIcon,
    title: "Fast Delivery",
    subtitle: "5-15 day turnaround",
  },
  {
    icon: SecurityIcon,
    title: "Secure Remote",
    subtitle: "Bank-grade protocols",
  },
  {
    icon: CodeIcon,
    title: "Modern Stack",
    subtitle: "Latest AI & Cloud tech",
  },
  {
    icon: TrendingUpIcon,
    title: "Outcome-Focused",
    subtitle: "ROI-driven development",
  },
] as const;

export function TrustBar() {
  return (
    <Section className="border-y border-border-subtle bg-surface-muted">
      <Container className="max-w-7xl py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-3 md:justify-start"
              >
                <div className="flex items-center justify-center rounded-lg bg-white p-2 text-primary shadow-sm ring-1 ring-gray-900/5">
                  <Icon className="size-5 shrink-0 text-current" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">{item.title}</p>
                  <p className="text-xs text-text-secondary">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
