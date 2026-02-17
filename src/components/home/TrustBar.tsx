import { Section } from "@/components/layouts/Section";
import { Container } from "@/components/layouts/Container";
import Image from "next/image";
import RocketIcon from "../../../public/icons/Rocket.svg";
import SecurityIcon from "../../../public/icons/Security.svg";
import CodeIcon from "../../../public/icons/Code.svg";
import TrendingUpIcon from "../../../public/icons/TrendingUp.svg";

export function TrustBar() {
  return (
    <Section className="border-y border-border-subtle bg-surface-muted">
      <Container className="max-w-7xl py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center justify-center rounded-lg bg-white p-2 text-primary shadow-sm ring-1 ring-gray-900/5">
              <span className="material-symbols-outlined">
                <Image src={RocketIcon} alt="Rocket" width={21} height={21} />
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">Fast Delivery</p>
              <p className="text-xs text-text-secondary">5-15 day turnaround</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center justify-center rounded-lg bg-white p-2 text-primary shadow-sm ring-1 ring-gray-900/5">
              <span className="material-symbols-outlined">
                <Image src={SecurityIcon} alt="Security" width={16} height={20} />
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">Secure Remote</p>
              <p className="text-xs text-text-secondary">Bank-grade protocols</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center justify-center rounded-lg bg-white p-2 text-primary shadow-sm ring-1 ring-gray-900/5">
              <span className="material-symbols-outlined">
                <Image src={CodeIcon} alt="Code" width={18} height={18} />
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">Modern Stack</p>
              <p className="text-xs text-text-secondary">Latest AI &amp; Cloud tech</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center justify-center rounded-lg bg-white p-2 text-primary shadow-sm ring-1 ring-gray-900/5">
              <span className="material-symbols-outlined">
                <Image src={TrendingUpIcon} alt="Trending Up" width={20} height={12} />
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">Outcome-Focused</p>
              <p className="text-xs text-text-secondary">ROI-driven development</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
