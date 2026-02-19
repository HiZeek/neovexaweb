"use client";

/** Replace with your Google Calendar appointment schedule link (Calendar → Create → Appointment schedule → Copy link). */
const GOOGLE_APPOINTMENTS_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1HlLmCbV0xH0xH0xH0xH0xH0xH0xH";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
            <p className="text-sm text-text-secondary">
              Contact us to get started:{" "}
              <a
                href="mailto:hello@neovexa.com"
                className="font-medium text-primary hover:text-primary-deep"
              >
                hello@neovexa.com
              </a>
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-gray-50"
              >
                Close
              </button>
              <a
                href={GOOGLE_APPOINTMENTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-deep"
              >
                Book with Google
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BookACallContext.Provider>
  );
}
