import Image from "next/image";
import { Section } from "@/components/layouts/Section";
import { Container } from "@/components/layouts/Container";

export function TestimonialsSection() {
  return (
    <Section className="bg-surface-muted py-20">
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div>
                <div className="mb-4 flex text-warning">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-medium leading-relaxed text-text-primary">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  alt={testimonial.alt}
                  className="h-10 w-10 rounded-full object-cover"
                  src={testimonial.image}
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-sm font-bold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const testimonials = [
  {
    quote:
      "NEOVEXA didn't just build a tool; they completely re-engineered how we handle logistics. The ROI was visible within 14 days.",
    author: "David Chen",
    role: "CTO, LogiFast",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLwiVIm3ZtUQowqWitJg6cn65r8T9YIz5M3JC-UGz6mV9Jfm98UHBmfqWEVwIM6ROb1dU9ZoBfHrwOIkIRgTxk6TvIhbUsYN2QjBVoahjKiydxt0xS6hjN9tGiXL67zKmRPHNJo3YDCFv_vfFimIB5i5pL2ohojpRXPRi0DvK_3ITY4J2G_HZPpPJmKr1OBg2QlxM3RAlc42t6TtIabdkAhtjn0mvQzFyeqGPn6eUyT208rj_s0CzUoo-s58lvkHfzJQMn4olkyjo",
    alt: "CEO Portrait",
  },
  {
    quote:
      "Their approach to automation is pragmatic and incredibly fast. We moved from concept to a live AI agent in just two weeks.",
    author: "Sarah Miller",
    role: "Founder, MedTech Solutions",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3jkPouEIK9I8HKTnMVlRvDGKLOoI7RAO-Pgu5u6heGglNlLdCnxjeYL8x9-ediaxC8O4tE7UdPgknRnqn4PKm5bQyheIjPFZ_RIsmV1GdkQHrS3wB9_vFt_jno_tA4nBm-61BF0wEuNpT-gG-Jaj_LpXCvgIxKFH0OKeDbTl5vpLib9cXhOOpSmU_-JytN-5D91MI1HY2cdTmLy3N_nOsHe2IFVYDHOgdZ9ItW5N8R2ihrboTrYaFVJJ9Uegliox1ps6Tjt-HP8w",
    alt: "Founder Portrait",
  },
  {
    quote:
      "Finally, a dev shop that speaks business. They focused entirely on the outcome and the tech stack is rock solid.",
    author: "James Wilson",
    role: "Director of Ops, FinCorp",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAacqLtiX_BFpSDUpgwzsLd-pPJaMp_ZxatsTWea68xaICuhPZ3_z_nkziwf8Fi-QvaD4HslqvdCD_E9Cz5lzU_-xTfSpE6G4dz7PIRThl-3eXgEfWczjvyQt3eifSAxE1fb6Wer6DS9VjBx16XrQyrELIVTYLjJllE07rDLyeTclIwoakIiTzAnddnITBkx2H1b8UlwWTAlqpYVvklNVkLzlOV7UYrJtKFKrtiDbJNI7GeJmwKGy_ssf-5UO0fi2cz3TZoy5exCs0",
    alt: "Director Portrait",
  },
] as const;

