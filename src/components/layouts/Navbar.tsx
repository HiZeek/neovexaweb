import Link from "next/link";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Neovexa
          </Link>
          <div className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            <Link href="/">Home</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            href="/contact"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
          >
            Book a Call
          </Link>
        </div>
      </Container>
    </header>
  );
}
