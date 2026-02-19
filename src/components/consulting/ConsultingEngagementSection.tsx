import { BookACallTrigger } from "@/components/home/BookACallModal";
import { Container } from "@/components/layouts/Container";
import { Section } from "@/components/layouts/Section";
import { CheckIcon } from "@/components/icons/ConsultingIcons";

const engagementModels = [
  {
    title: "Advisory Sprint",
    duration: "1–2 weeks",
    popular: false,
    description:
      "Fast-track strategy and architecture review to validate your roadmap before major investment.",
    items: ["2 Strategy Sessions", "Tech Stack Audit", "ROI Estimation Report"],
    cta: "Select Model",
    primary: false,
  },
  {
    title: "Build Sprint",
    duration: "2–6 weeks",
    popular: true,
    description:
      "Intense engineering cycles focused on delivering a functional prototype or MVP ready for production.",
    items: ["Dedicated Engineer", "Daily Async Updates", "Fully Functional Deploy"],
    cta: "Start Building",
    primary: true,
  },
  {
    title: "Monthly Retainer",
    duration: "Ongoing",
    popular: false,
    description:
      "Embedded operational support for scaling systems, continuous optimization, and maintenance.",
    items: ["24/7 Monitoring", "Bi-Weekly Syncs", "Priority Troubleshooting"],
    cta: "Learn More",
    primary: false,
  },
];

export function ConsultingEngagementSection() {
  return (
    <Section
      id="engagement"
      className="bg-surface-muted/50 px-4 py-20 sm:px-6 sm:py-24 md:py-32"
    >
      <Container className="px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <h2 className="mb-4 text-3xl font-black text-accent-navy sm:mb-6 sm:text-4xl">
            Engagement Models
          </h2>
          <p className="text-base text-text-secondary sm:text-lg">
            Transparent frameworks tailored to your project velocity and strategic
            needs.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-3">
          {engagementModels.map((model, i) => (
            <div
              key={i}
              className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8 md:p-10 ${
                model.popular
                  ? "border-2 border-primary shadow-2xl shadow-primary/5"
                  : "border-border-subtle"
              }`}
            >
              {model.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[9px] font-black uppercase tracking-wider text-white shadow-lg sm:-top-4 sm:px-5 sm:py-1.5 sm:text-[10px] sm:tracking-[0.2em]">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2 text-lg font-extrabold text-accent-navy sm:text-xl">
                {model.title}
              </h3>
              <p className="mb-6 text-sm font-bold uppercase tracking-wider text-primary sm:mb-8">
                {model.duration}
              </p>
              <p className="mb-8 text-sm leading-relaxed text-text-secondary sm:mb-10">
                {model.description}
              </p>
              <ul className="mb-8 grow space-y-4 sm:mb-12 sm:space-y-5">
                {model.items.map((item, j) => (
                  <li
                    key={j}
                    className={`flex gap-3 text-sm font-medium ${
                      model.popular ? "font-bold text-accent-navy" : "text-text-secondary"
                    }`}
                  >
                    <span
                      className={
                        model.popular
                          ? "text-primary [&>svg]:size-5"
                          : "text-text-secondary [&>svg]:size-5"
                      }
                    >
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {model.primary ? (
                <BookACallTrigger className="min-h-[48px] w-full rounded-2xl bg-primary py-4 font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] hover:bg-primary-deep focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  {model.cta}
                </BookACallTrigger>
              ) : (
                <BookACallTrigger className="min-h-[48px] w-full rounded-2xl border border-border-subtle py-4 font-bold text-text-primary transition-all hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  {model.cta}
                </BookACallTrigger>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
