import type { Metadata } from "next";
import clsx from 'clsx';

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
      <body className={clsx(inter.className, "bg-white")}>
        <header className="h-80 bg-red-400 w-full flex justify-center items-center">
          <h1 className="text-white text-7xl uppercase font-black max-w-[300px]">Car Dealer App</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
