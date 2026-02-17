import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <Container className="flex flex-col gap-8 py-10 text-sm text-zinc-700 md:flex-row md:justify-between">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Company
          </h3>
          <p className="text-zinc-700">Neovexa</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Solutions
          </h3>
          <p className="text-zinc-700">Explore how we can help you.</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Services
          </h3>
          <p className="text-zinc-700">Strategy, implementation, and support.</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Contact
          </h3>
          <p className="text-zinc-700">Get in touch to book a call.</p>
        </div>
      </Container>
    </footer>
  );
}
