import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samaarav - Technology & Staffing Solutions",
  description: "Connecting exceptional technology talent with businesses that are building what's next.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}