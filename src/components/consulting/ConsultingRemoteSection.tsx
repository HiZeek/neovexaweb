import { Container } from "@/components/layouts/Container";
import { Section } from "@/components/layouts/Section";
import { EncryptedIcon, HistoryEduIcon, ScheduleIcon } from "@/components/icons/ConsultingIcons";
import Image from "next/image";

const remoteFeatures = [
  {
    title: "Shared Backlog & Demos",
    body: "Full visibility into progress via Jira/Linear and recorded Loom walkthroughs for every update.",
    icon: HistoryEduIcon,
  },
  {
    title: "Enterprise-Grade Security",
    body: "VPN-first protocols and strictly controlled access to your sensitive production environments.",
    icon: EncryptedIcon,
  },
  {
    title: "Timezone Overlap",
    body: "Guaranteed 4-hour minimum overlap for real-time syncs, regardless of your global location.",
    icon: ScheduleIcon,
  },
];

export function ConsultingRemoteSection() {
  return (
    <Section className="overflow-hidden px-4 py-20 sm:px-6 sm:py-28 md:py-40">
      <Container className="px-4 sm:px-6">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-primary/5 blur-[100px] sm:-left-32 sm:-top-32 sm:h-80 sm:w-80 sm:blur-[120px]" />
            <h2 className="mb-6 text-3xl font-black leading-tight text-accent-navy sm:mb-8 sm:text-4xl md:text-5xl">
              Remote-First Execution
            </h2>
            <p className="mb-10 text-base leading-relaxed text-text-secondary sm:mb-14 sm:text-lg md:text-xl">
              We&apos;ve perfected the art of high-bandwidth remote collaboration. No
              friction, total transparency, and consistent velocity across timezones.
            </p>
            <div className="space-y-8 sm:space-y-10">
              {remoteFeatures.map((feat, i) => (
                <div key={i} className="flex gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-surface-muted text-primary [&>svg]:size-6 sm:h-14 sm:w-14 sm:rounded-2xl [&>svg]:sm:size-7">
                    <feat.icon />
                  </div>
                  <div className="min-w-0">
                    <h4 className="mb-1.5 text-base font-bold text-accent-navy sm:mb-2 sm:text-lg">
                      {feat.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {feat.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/10 to-primary-deep/10 opacity-50 sm:rounded-3xl" />
            <div className="relative z-10 aspect-video w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted shadow-2xl sm:rounded-3xl">
              <Image
                alt="Remote Team Collaboration"
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsHLGl5227sr0IdURqndWlwLkEKhOE9oiRZySIp4vz_ZVmi39_SmabdWwtnOcGPNY1GLu3rMGNPAt1dPet8cHkmQNc_Seqfx_a1lOnbs0OXw_qwewIbHLf3QT1qVSwuNV-nJ5r2s1UXSA2xW-dH6GfDuFTLu2y39Dez_Iy6sLzXgOqBWoOQia2c9M1Qc4dl6sFpDL7WkE0_I0cbKiRUrzI_lQr5gCLRp9GOh5z4OHl_pZ-V0XhvxB-mkRUMQhE0UifdpKbCIvzPvM"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 z-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl sm:-bottom-6 sm:-right-6 sm:h-32 sm:w-32 sm:blur-3xl" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
