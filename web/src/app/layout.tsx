import React, { Suspense } from "react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StateProvider } from "../context";
import "./globals.css";
import { Toaster } from "sonner";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <StateProvider>
          <Suspense>{children}</Suspense>
        </StateProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
