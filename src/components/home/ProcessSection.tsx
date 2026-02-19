import { Section } from "@/components/layouts/Section";
import { Container } from "@/components/layouts/Container";
import {
  SearchIcon,
  LowPriorityIcon,
  DeveloperModeIcon,
  RocketSolutionsIcon,
} from "@/components/icons/ProcessSectionIcons";

export function ProcessSection() {
  return (
    <Section id="process" className="bg-surface-muted py-20 lg:py-28">
      <Container className="max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight text-accent-navy sm:text-4xl">
            From Concept to Code
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Our sprint-based methodology ensures rapid delivery without compromising quality.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-200 lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;
              const containerClasses = isEven
                ? "relative flex flex-col items-center lg:flex-row-reverse lg:justify-between group"
                : "relative flex flex-col items-center lg:flex-row lg:justify-between group";

              const textWrapperClasses = isEven
                ? "mb-6 flex items-center justify-center lg:mb-0 lg:w-5/12 lg:justify-start"
                : "mb-6 flex items-center justify-center lg:mb-0 lg:w-5/12 lg:justify-end";

              const iconWrapperClasses = isEven
                ? "mt-6 flex items-center justify-center lg:mt-0 lg:w-5/12 lg:justify-end"
                : "mt-6 flex items-center justify-center lg:mt-0 lg:w-5/12 lg:justify-start";

              const textAlignClasses = isEven
                ? "pt-14 lg:pt-0 text-center lg:text-left pl-0 lg:pl-8"
                : "pt-14 lg:pt-0 text-center lg:text-right pr-0 lg:pr-8";

              const iconAlignClasses = isEven
                ? "pr-0 lg:pr-8 opacity-40 group-hover:opacity-100 transition-opacity"
                : "pl-0 lg:pl-8 opacity-40 group-hover:opacity-100 transition-opacity";

              const isFirst = index === 0;

              return (
                <div key={step.title} className={containerClasses}>
                  <div className={textWrapperClasses}>
                    <div className={textAlignClasses}>
                      <h3 className="mb-2 text-xl font-bold text-accent-navy">{step.title}</h3>
                      <p className="text-text-secondary">{step.description}</p>
                    </div>
                  </div>

                  <div
                    className={`absolute left-1/2 top-0 -ml-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-md lg:static lg:ml-0 lg:translate-x-0 ${
                      isFirst
                        ? "bg-primary text-white"
                        : "bg-white text-primary ring-1 ring-gray-200"
                    }`}
                  >
                    <span className="font-bold">{step.step}</span>
                  </div>

                  <div className={iconWrapperClasses}>
                    <div className={iconAlignClasses}>
                      <Icon className="h-8 w-auto text-primary sm:h-9" aria-hidden />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

const steps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We dive deep into your current workflows to identify bottlenecks and high-ROI opportunities.",
    icon: SearchIcon,
  },
  {
    step: 2,
    title: "Prioritize",
    description:
      "We map out a strategic roadmap, selecting the features that deliver immediate value.",
    icon: LowPriorityIcon,
  },
  {
    step: 3,
    title: "Build Sprint",
    description:
      "Rapid development cycles. You get weekly updates and testable deliverables, not radio silence.",
    icon: DeveloperModeIcon,
  },
  {
    step: 4,
    title: "Launch",
    description:
      "Seamless deployment to your live environment with comprehensive documentation and training.",
    icon: RocketSolutionsIcon,
  },
] as const;
