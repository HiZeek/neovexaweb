import Image from "next/image";
import { Section } from "@/components/layouts/Section";
import { Container } from "@/components/layouts/Container";
import { BoltIcon, CircleCheckIcon } from "@/components/icons/TrustBarIcons";
import { BookACallTrigger } from "@/components/home/BookACallModal";

export function HeroSection() {
  return (
    <Section className="relative mesh-gradient pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Container className="max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Accepting New Enterprise Partners
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-accent-navy sm:text-5xl lg:text-6xl">
              AI + Automation that ships in <span className="text-gradient-primary">weeks</span> —
              not quarters
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-gray-700">
              Enterprise-grade cloud engineering and workflow automation for forward-thinking SMBs.
              Stop drowning in manual tasks and start scaling with intelligent systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <BookACallTrigger className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-deep focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Book a Call
              </BookACallTrigger>
              <a
                href="#solutions"
                className="flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-base font-bold text-text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                See Solutions
              </a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <Image
                  alt="Client Avatar"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8RLzlYjsMD6DAnPLAg0umm2XNRzfTuKHVgdnTGE4bsl2S-JiLHemY7mwsEsoyLStQ6ADgBoZYgIJS3AbRl27UGfYq6d1kO6kyRAnS_3xjlAZ6K_xgYhdV3INHEDvJxP81hrS5uZvH6Uimqa1F-m9VgBYlyx4iIiDAOani3equSwZ8yw0bHMyjbIZ2GfX55vhTEAUELZcy6xBrSV9LUaPxNviIoR8xMo4HvenYIClku9eIc5quKAyOg5nbBaUt6nsI_w98uA7yOzQ"
                  width={32}
                  height={32}
                />
                <Image
                  alt="Client Avatar"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdBwXkh0a4rPdRG4WYJZ0bKMRkjxMwGIRoQTXezgWedn55StqGxEujU-QqGFVMILMCkRGwUHKhKc6DqceAG_FVzBp78zsIcLr3mA6QdUO_ZVccuXrFDWHCkBrHmH5YxwuP918Ad8cEDDLbNYfUdtUttkrWtbp7Dp_wduQ1LzBMXi-Ve9CNHsbFNuiHRUw8BvRi-ZZICzoUfQ9lk86XHnxV30G-3A_k6qtw8YO3OnchHr3DB6WCJ1X-CcyZa_ozhX4h4wU_K3z32VE"
                  width={32}
                  height={32}
                />
                <Image
                  alt="Client Avatar"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfEsvlqzw_mpxq0JEKcoVqfNIwVXGU_7w37Jg-y3IzcFVuVbh4DznhjJYRcolT94uXzKNuLNxuVQhPm8uDilIfkheq9kBpPJjhB_80SZ4UPzRSmcKcfCLlf8aPQPP-jYBxoON1WeJXNFnSGNjzfdvbTKvsNJlKwq6-bDeLFL0_fJrdgKuZYwyXoHoSByrr8ub16Tb5_6uBZgBuqpCivVZTofCYZlxRPthoQcYqRHTpe4uy4LVls2fobH5uO6gB25IjjR8rvxGK2yc"
                  width={32}
                  height={32}
                />
              </div>
              <p>Trusted by 100+ innovative companies</p>
            </div>
          </div>

          <div className="relative w-full max-w-lg lg:ml-auto lg:max-w-none">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
              {/* Header */}
              <div className="absolute top-0 z-10 flex h-12 w-full items-center gap-2 border-b border-gray-100 bg-gray-50/50 px-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-error" />
                  <div className="h-3 w-3 rounded-full bg-warning" />
                  <div className="h-3 w-3 rounded-full bg-success" />
                </div>
              </div>

              {/* Dashboard Content Mockup */}
              <div className="absolute inset-0 flex flex-col gap-4 bg-slate-50/30 p-6 pt-12">
                {/* Top stats row */}
                <div className="flex gap-4">
                  <div className="flex-1 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="mb-3 h-2 w-16 rounded bg-gray-200" />
                    <div className="mb-1 h-8 w-24 animate-pulse rounded bg-primary/10" />
                    <div className="h-2 w-12 rounded bg-success/20" />
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="mb-3 h-2 w-16 rounded bg-gray-200" />
                    <div className="mb-1 h-8 w-24 rounded bg-gray-100" />
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="mb-3 h-2 w-16 rounded bg-gray-200" />
                    <div className="mb-1 h-8 w-24 rounded bg-gray-100" />
                  </div>
                </div>

                {/* Main graph area */}
                <div className="relative flex-1 overflow-hidden rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="absolute inset-0 flex items-end justify-between gap-2 px-6 pb-6 pt-16">
                    <div className="h-[40%] w-full rounded-t-sm bg-primary/20" />
                    <div className="h-[60%] w-full rounded-t-sm bg-primary/30" />
                    <div className="h-[30%] w-full rounded-t-sm bg-primary/40" />
                    <div className="h-[75%] w-full rounded-t-sm bg-primary/50" />
                    <div className="h-[50%] w-full rounded-t-sm bg-primary/60" />
                    <div className="relative h-[90%] w-full rounded-t-sm bg-primary transition-all duration-500 group-hover:h-[95%]">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        +142%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute top-[10%] -right-4 w-48 rounded-lg border border-gray-100 bg-white p-4 shadow-glass animate-[float_4s_ease-in-out_infinite]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-success/20 p-2 text-success">
                    <CircleCheckIcon className="size-3 shrink-0 text-current" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Workflow</p>
                    <p className="text-sm font-bold text-gray-900">Optimized</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-[5%] -left-4 w-48 rounded-lg border border-gray-100 bg-white p-4 shadow-glass animate-[float_5s_ease-in-out_infinite_0.5s]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/20 p-2 text-primary">
                    <BoltIcon className="size-[18px] shrink-0 text-current" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Speed</p>
                    <p className="text-sm font-bold text-gray-900">12ms Latency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative back splash */}
            <div className="absolute -inset-4 -z-10 rounded-xl bg-gradient-to-tr from-primary/20 to-primary-accent/30 opacity-60 blur-2xl" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
