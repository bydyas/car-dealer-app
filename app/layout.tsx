import type { Metadata } from "next";

import { inter } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Car Dealer App",
  description: "Full-Stack JS engineer test assessment - the Car Dealer App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
