"use client";

import { enableMSW } from "@/api/mocks";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React, { Suspense, useEffect } from "react";
import { Toaster } from "sonner";
import { StateProvider } from "../context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const queryClient = new QueryClient();

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
      <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
        <QueryClientProvider client={queryClient}>
          <StateProvider>
            <Suspense>{children}</Suspense>
          </StateProvider>
        </QueryClientProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
