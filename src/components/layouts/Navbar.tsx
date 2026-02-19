"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BookACallTrigger, useBookACallModal } from "@/components/home/BookACallModal";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { openModal } = useBookACallModal();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-subtle/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-text-primary">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/neovexa_logo.svg" alt="Neovexa" width={140} height={28} priority />
            <span className="sr-only">Neovexa</span>
          </Link>
        </div>
        <nav className="hidden flex-1 justify-center gap-8 md:flex">
          <Link
            href="/consulting"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Consulting
          </Link>
          <Link
            href="/#solutions"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Solutions
          </Link>
          <Link
            href="/#process"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Process
          </Link>
          <Link
            href="/#cases"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Case Studies
          </Link>
          {/* <a
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            href="#about"
          >
            About
          </a> */}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <BookACallTrigger className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-deep hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Book a Call
          </BookACallTrigger>
        </div>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <div className="flex md:hidden">
            <DrawerTrigger
              className="inline-flex size-10 items-center justify-center rounded-md text-text-primary transition-colors hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Open main menu"
            >
              <MenuIcon className="size-6" />
            </DrawerTrigger>
          </div>
          <DrawerContent>
            <DrawerHeader>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/neovexa_logo.svg"
                  alt="Neovexa"
                  width={120}
                  height={24}
                />
                <span className="sr-only">Neovexa</span>
              </Link>
              <DrawerClose
                className="inline-flex size-10 items-center justify-center rounded-md text-text-primary transition-colors hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Close main menu"
              >
                <CloseIcon className="size-6" />
              </DrawerClose>
            </DrawerHeader>

            <nav className="mt-2 flex flex-col gap-3 text-sm font-medium text-text-secondary">
              <DrawerClose asChild>
                <Link
                  href="/consulting"
                  className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-surface-muted hover:text-primary"
                >
                  <span>Consulting</span>
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link
                  href="/#solutions"
                  className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-surface-muted hover:text-primary"
                >
                  <span>Solutions</span>
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link
                  href="/#process"
                  className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-surface-muted hover:text-primary"
                >
                  <span>Process</span>
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link
                  href="/#cases"
                  className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-surface-muted hover:text-primary"
                >
                  <span>Case Studies</span>
                </Link>
              </DrawerClose>
            </nav>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  openModal();
                  setDrawerOpen(false);
                }}
                className="flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-deep hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Book a Call
              </button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
