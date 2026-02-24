"use client";

/** Microsoft Teams / Bookings appointment URL. Replace with your Bookings page or Teams scheduling link. */
const TEAMS_BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/info@neovexa.com/bookings/s/1739976306415/";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function TeamsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.385 9.281h-1.77v6.385c0 .746.615 1.385 1.385 1.385h1.77c.746 0 1.385-.615 1.385-1.385v-4.615c0-.746-.615-1.385-1.385-1.385zM4.615 10.615c.746 0 1.385.615 1.385 1.385v4.615c0 .746-.615 1.385-1.385 1.385H2.846c-.746 0-1.385-.615-1.385-1.385V12c0-.746.615-1.385 1.385-1.385h1.77zm14.77-2.77c.746 0 1.385.615 1.385 1.385v4.615c0 .746-.615 1.385-1.385 1.385h-1.77c-.746 0-1.385-.615-1.385-1.385V9.231c0-.746.615-1.385 1.385-1.385h1.77zM4.615 7.846c.746 0 1.385.615 1.385 1.385V12c0 .746-.615 1.385-1.385 1.385H2.846c-.746 0-1.385-.615-1.385-1.385V9.231c0-.746.615-1.385 1.385-1.385h1.77zm14.77-2.77c.746 0 1.385.615 1.385 1.385v4.615c0 .746-.615 1.385-1.385 1.385h-1.77c-.746 0-1.385-.615-1.385-1.385V6.462c0-.746.615-1.385 1.385-1.385h1.77zM4.615 5.077c.746 0 1.385.615 1.385 1.385v4.615c0 .746-.615 1.385-1.385 1.385H2.846c-.746 0-1.385-.615-1.385-1.385V6.462c0-.746.615-1.385 1.385-1.385h1.77zM20.308 4H3.692C2.769 4 2 4.769 2 5.692v12.616C2 19.231 2.769 20 3.692 20h16.616c.923 0 1.692-.769 1.692-1.692V5.692C22 4.769 21.231 4 20.308 4z" />
    </svg>
  );
}

type BookACallContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openModal: () => void;
};

const BookACallContext = createContext<BookACallContextValue | null>(null);

export function useBookACallModal() {
  const ctx = useContext(BookACallContext);
  if (!ctx) {
    throw new Error("useBookACallModal must be used within BookACallModalProvider");
  }
  return ctx;
}

/** Client button that opens the Book a Call modal. Use inside BookACallModalProvider. */
export function BookACallTrigger({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openModal } = useBookACallModal();
  return (
    <button type="button" className={className} onClick={openModal} {...props}>
      {children}
    </button>
  );
}

export function BookACallModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);

  return (
    <BookACallContext.Provider value={{ open, setOpen, openModal }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book a Call</DialogTitle>
            <DialogDescription>
              Schedule a 30-minute discovery session with our team. No commitment required—we’ll
              explore how we can help you automate and scale.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            {TEAMS_BOOKING_URL ? (
              <p className="text-sm text-text-secondary">
                Pick a time that works for you—we’ll send a Microsoft Teams meeting invite to your
                inbox.
              </p>
            ) : (
              <p className="text-sm text-text-secondary">
                Contact us to get started:{" "}
                <a
                  href="mailto:info@neovexa.com"
                  className="font-medium text-primary hover:text-primary-deep"
                >
                  info@neovexa.com
                </a>
              </p>
            )}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-gray-50"
              >
                Close
              </button>
              {TEAMS_BOOKING_URL ? (
                <a
                  href={TEAMS_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-deep"
                >
                  {/* <TeamsIcon className="size-4" /> */}
                  Schedule on Microsoft Teams
                </a>
              ) : (
                <a
                  href="mailto:info@neovexa.com"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-deep"
                >
                  Email us
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BookACallContext.Provider>
  );
}
