"use client";

import HeaderAdm from "@/components/HeaderAdm";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { isAuth, useStore } from "@/context";
import { TabsContent } from "@radix-ui/react-tabs";
import { redirect } from "next/navigation";
import AdmAside from "../../../components/AdmAside";
import TabCopyPaste from "./TabCopyPaste";
import TabQrCode from "./TabQrCode";

export default function Deposit() {
  const { authenticated } = useStore();

  if (!isAuth(Deposit, authenticated)) {
    redirect("/");
  }

  return (
    <>
      <AdmAside />

      <main className="w-full md:w-[89%] h-screen ml-auto flex flex-col">
        <HeaderAdm />

        <section className="flex-grow w-full h-full flex flex-col md:flex-row items-start justify-between gap-3 px-3 py-6 md:px-2 md:py-4">
          <div className="w-full h-full flex flex-col items-start gap-3">
            <div className="w-full h-full flex flex-col gap-4 rounded-lg px-5">
              <header className="w-full flex items-center justify-start pt-3">
                <h2 className="text-2xl font-bold">Deposit</h2>
              </header>

              <Tabs defaultValue="pix" className="w-full flex flex-col gap-4 rounded-lg overflow-y-auto">
                <TabsList className="w-min flex items-center justify-start bg-transparent border border-[#D9D9D9]">
                  <TabsTrigger className="w-full px-4 py-2 text-xl" value="pix">
                    Pix
                  </TabsTrigger>
                  <TabsTrigger className="w-full px-4 py-2 text-xl" value="ticket">
                    Ticket
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="pix">
                  <TabCopyPaste />
                </TabsContent>

                <TabsContent value="ticket">
                  <TabQrCode />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
