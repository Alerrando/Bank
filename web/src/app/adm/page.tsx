"use client";

import HeaderAdm from "@/components/HeaderAdm";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardWalletProps } from "@/context/types";
import { cardsWallet } from "@/util";
import { ArrowLeftRight, HandCoins } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import AdmAside from "./AdmAside";

export default function Adm() {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);

  return (
    <>
      <AdmAside />
      <main className="w-full xl:w-[89%] h-screen ml-auto">
        <HeaderAdm />

        <section className="w-full grid gap-3 px-3 py-6 xl:p-6">
          <h2 className="w-fit text-lg font-semibold">My Cards</h2>

          <Carousel opts={{ align: "start" }} className="w-full md:max-w-[62%] flex items-center gap-3 md:ml-12">
            <CarouselContent>
              {Array.from({ length: 2 }).map(() => (
                <CarouselItem className={`w-full flex items-center gap-4`} key={Math.random()}>
                  {cardsWallet.map((item: CardWalletProps, indexCards: number) => (
                    <>
                      <div
                        className={`w-full h-52 flex flex-col items-start justify-between text-white ${item.gradient} rounded-lg relative p-8`}
                        key={indexCards}
                      >
                        <div className="grid gap-2">
                          <span className="font-bold opacity-60">{item.name}</span>
                          <h3 className="text-3xl font-semibold">{item.limit}</h3>
                        </div>

                        <div className="w-full flex items-center justify-between">
                          <div className="text-bold text-[#Ffd700] text-lg">{item.numberCard}</div>

                          <div className="flex relative">
                            <div className="w-6 h-6 bg-[#F2F2F2] opacity-30 rounded-full absolute -left-4 order-1"></div>
                            <div className="w-6 h-6 bg-[#F2F2F2] opacity-30 rounded-full order-2"></div>
                          </div>
                        </div>
                        <Image src="/waveElements.png" className="w-full h-full opacity-100" alt="" fill={true} />
                      </div>
                    </>
                  ))}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <Tabs defaultValue="all" className="h-[45%] w-4/12 flex flex-col gap-2 border shadow-lg mx-3 md:mx-6 pt-2 pb-4 rounded-lg overflow-y-auto">
          <TabsList className="w-full h-min flex items-center justify-between px-3 pb-2 bg-transparent border-b border-b-zinc-100">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="deposits">Deposits</TabsTrigger>
            <TabsTrigger value="transfers">Transfers</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <table className="w-full">
              <thead className="bg-princ text-white">
                <tr>
                  <th className="px-3 text-start">Icon</th>
                  <th className="px-3">Cod</th>
                  <th className="px-3">Cpf</th>
                  <th className="px-3">Infos</th>
                </tr>
              </thead>

              <tbody className="py-2">
                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                  <td className="pl-3 py-1">
                    <HandCoins size={34} />
                  </td>
                  <td className="font-semibold text-princ text-xs py-1">DEP0001</td>
                  <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                  <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                    <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                    <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                  </td>
                </tr>

                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                  <td className="pl-3 py-1">
                    <ArrowLeftRight size={34} />
                  </td>
                  <td className="font-semibold text-princ text-xs py-1">TRANS001</td>
                  <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                  <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                    <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                    <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                  </td>
                </tr>
                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                  <td className="pl-3 py-1">
                    <HandCoins size={34} />
                  </td>
                  <td className="font-semibold text-princ text-xs py-1">DEP0001</td>
                  <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                  <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                    <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                    <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                  </td>
                </tr>

                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                  <td className="pl-3 py-1">
                    <ArrowLeftRight size={34} />
                  </td>
                  <td className="font-semibold text-princ text-xs py-1">TRANS001</td>
                  <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                  <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                    <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                    <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                  </td>
                </tr>
                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                  <td className="pl-3 py-1">
                    <HandCoins size={34} />
                  </td>
                  <td className="font-semibold text-princ text-xs py-1">DEP0001</td>
                  <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                  <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                    <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                    <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                  </td>
                </tr>

                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                  <td className="pl-3 py-1">
                    <ArrowLeftRight size={34} />
                  </td>
                  <td className="font-semibold text-princ text-xs py-1">TRANS001</td>
                  <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                  <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                    <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                    <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabsContent>

          <TabsContent value="deposits"></TabsContent>
          <TabsContent value="transfers"></TabsContent>
        </Tabs>
      </main>
    </>
  );
}
