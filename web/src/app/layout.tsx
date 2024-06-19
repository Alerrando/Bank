"use client";

import { enableMSW } from "@/api/mocks";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React, { Suspense, useEffect } from "react";
import { Toaster } from "sonner";
import { StateProvider } from "../context";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    let mswWorker;
    const startMswWorker = async () => {
      mswWorker = await enableMSW();
      await mswWorker?.start();
    };
    if (process.env.NODE_ENV === "development") {
      startMswWorker();
    }
    return () => {
      mswWorker?.stop();
    };
  }, []);

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
