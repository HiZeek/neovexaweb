import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neovexa",
  description: "Neovexa web experience",
  icons: {
    icon: "/neovexa-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background-light text-text-primary">{children}</body>
    </html>
  );
}
