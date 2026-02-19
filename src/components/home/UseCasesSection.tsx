import { Section } from "@/components/layouts/Section";
import { Container } from "@/components/layouts/Container";

export function UseCasesSection() {
  return (
    <Section id="cases" className="border-t border-border-subtle bg-white py-20 lg:py-28">
      <Container className="max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-accent-navy">Real World Impact</h2>
            <p className="mt-4 text-lg text-text-secondary">
              Proven results from our deployment archive.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-deep focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              View All Case Studies{" "}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50 transition-colors hover:border-primary/30"
            >
              <div
                className="relative h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${useCase.image}')` }}
                aria-label={useCase.alt}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-accent">
                    {useCase.tag}
                  </p>
                  <h3 className="text-lg font-bold">{useCase.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-accent-navy">{useCase.metric}</span>
                  <span className="text-sm font-medium text-success">{useCase.subcopy}</span>
                </div>
                <p className="text-sm text-text-secondary">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const useCases = [
  {
    tag: "Logistics",
    title: "Invoice Automation",
    metric: "90%",
    subcopy: "Reduction in processing time",
    description:
      "Automated extraction of data from 5,000+ monthly invoices, integrating directly into SAP.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChL7Sg-gLdZ6Y6SeHzXMbCqTHeU3FpogEojUnusskMRTK9345N9AD0Qk4VErVzmnVr71RWwh1yeah76T6tZvNtxeux9fVUGbPBaEzr13z3e_tTGb63SYlEgRYRJhyUBajg26kFr7u1BgUjwySORrpDO5nUkCDwNCSlNWudH6srkFVJjnBm1mXK2O01GrfCSq_9cNFc1WMAOqDOaKBFPhBLz3aW3VOhkfNp9-apfEPr0qPRyX53f7GkMknHYvHLyvt-kuNo1Xfzs7E",
    alt: "Abstract data visualization chart on a monitor",
  },
  {
    tag: "Healthcare",
    title: "Patient Intake AI",
    metric: "$120k",
    subcopy: "Annual Savings",
    description:
      "Deployed an AI receptionist to handle appointment scheduling and initial symptom triage.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAQ3MB9OqSXnllrt_zRfgkvnSM8tjt6_EeDbE8HlBGH-Bsfk0_cSd6J8P4YPIoz-1uUOEykdTGIlpxKKPRcZWPeS1oRvAyFMoR58gcnJ6RrZihfU2YqfgDl8goMaAb5gQP18aq5O8z3GsuEmVlSJXJC04_grhL73TJkpvGnFhHQGdOJZ6vQzdR8ScUb3fnf00N02tHPoDBKnOecTGZTlFzOYqFGT9NVDWH-OFprNXvg8fAV8UpgW5K-OHHX1si-s295W_ayBAJ7yM",
    alt: "Clean financial dashboard interface",
  },
  {
    tag: "SaaS",
    title: "Customer Support Bot",
    metric: "24/7",
    subcopy: "Coverage Achieved",
    description:
      "Custom LLM trained on documentation reduced support ticket volume by 45% in week one.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Xw5OAQp9aSftiFAuGajO7xoUV02UmIFDBMqUKRjVrCm_p6F_L3AtbvQNUZVvvjcIteLrlOLbCIkY60mz3Py7J7a2VD6u3VxOYBCousvJgoVCygc6OKFBgnLO5RQc8LhbkcAPR2jHFOLe5lVGx08UG8mAKrYqOkWzLDo-jZTgUVqOQm-9YzebQRAtAXlmFVbZoLqrMaA48RyU92pUvhkSQ4j3w0TGI_P1EDhL-g5aO6NgDyIWdGqnooUQx7HnK930ySjZHVhYuGs",
    alt: "Modern office meeting room with technology",
  },
] as const;

