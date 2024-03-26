"use client";

import { AlignJustify, ArrowLeftRight, Bell, HandCoins, Settings } from "lucide-react";
import AdmAside from "./AdmAside";
import { CardsAdm, CardsAdmProps } from "@/components/CardsAdm";
import Image from "next/image";
import { CardWalletProps } from "@/context/types";
import { useEffect } from "react";
import { cardsWallet } from "@/util";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Adm(){
    const searchParams = useSearchParams();
    const access = searchParams.get('modal') === "true";
    const navigate = useRouter();

    useEffect(() => {
        setTimeout(() => {}, 3000);
    }, []);

    return(
        <>
            <AdmAside />
            <main className="w-full md:w-[89%] h-screen ml-auto">
                <header className="flex items-center justify-between py-3 px-2 md:px-6 border-b border-b-primary">
                    <AlignJustify size={22} onClick={() => navigate.push(`adm?${redirectPage("true")}`)} className={"sm:block hidden hover:fill-black cursor-pointer"} />

                    <h1 className="text-2xl font-bold">Welcome Dashboard</h1>

                    <div className="flex gap-3">
                        <Bell size={22} className="hover:fill-black cursor-pointer" />
                        <Settings size={22} className="hidden md:block hover:fill-black cursor-pointer" />
                    </div>
                </header>

                <section className="w-full grid gap-3 px-3 py-6 md:p-6">
                    <h2 className="text-lg font-semibold">My Cards</h2>

                    <div className="w-full flex items-center gap-3">
                        {cardsWallet.map((card: CardWalletProps, index: Key) => (
                            <div className={`w-full md:w-[30%] h-52 flex flex-col items-start justify-between text-white ${card.gradient} rounded-lg relative p-8`} key={index}>
                                <div className="grid gap-2">
                                    <span className="font-bold opacity-60">{card.name}</span>
                                    <h3 className="text-3xl font-semibold">{card.limit}</h3>
                                </div>

                                <div className="w-full flex items-center justify-between">
                                    <div className="text-bold text-[#Ffd700] text-lg">{card.numberCard}</div>

                                    <div className="flex relative">
                                        <div className="w-6 h-6 bg-[#F2F2F2] opacity-30 rounded-full absolute -left-4 order-1"></div>
                                        <div className="w-6 h-6 bg-[#F2F2F2] opacity-30 rounded-full order-2"></div>
                                    </div>
                                </div>
                                <Image src="/waveElements.png" className="w-full h-full opacity-80" alt="" fill={true} />
                            </div>
                        ))}
                    </div>
                </section>

                <Tabs defaultValue="all" className="h-full max-h-[50%] w-4/12 flex flex-col gap-2 border shadow-lg mx-3 md:mx-6 pt-2 pb-4 rounded-lg overflow-y-auto">
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
                                    <td className="pl-3 py-1"><HandCoins size={34} /></td>
                                    <td className="font-semibold text-princ text-xs py-1">DEP0001</td>
                                    <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                                    <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                                        <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                                        <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                                    </td>
                                </tr>

                                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                                    <td className="pl-3 py-1"><ArrowLeftRight size={34} /></td>
                                    <td className="font-semibold text-princ text-xs py-1">TRANS001</td>
                                    <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                                    <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                                        <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                                        <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                                    </td>
                                </tr>
                                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                                    <td className="pl-3 py-1"><HandCoins size={34} /></td>
                                    <td className="font-semibold text-princ text-xs py-1">DEP0001</td>
                                    <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                                    <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                                        <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                                        <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                                    </td>
                                </tr>

                                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                                    <td className="pl-3 py-1"><ArrowLeftRight size={34} /></td>
                                    <td className="font-semibold text-princ text-xs py-1">TRANS001</td>
                                    <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                                    <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                                        <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                                        <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                                    </td>
                                </tr>
                                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                                    <td className="pl-3 py-1"><HandCoins size={34} /></td>
                                    <td className="font-semibold text-princ text-xs py-1">DEP0001</td>
                                    <td className="font-semibold text-zinc-400 text-xs py-1">51858773830</td>
                                    <td className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                                        <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                                        <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                                    </td>
                                </tr>

                                <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                                    <td className="pl-3 py-1"><ArrowLeftRight size={34} /></td>
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

    function redirectPage(redirect: string){
        const params = new URLSearchParams(searchParams.toString())
        params.set("modal", redirect);
        return params.toString();
    }
}