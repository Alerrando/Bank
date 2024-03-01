"use client";

import { AlignJustify, Bell, Settings } from "lucide-react";
import AdmAside from "../AdmAside";
import Image from "next/image";
import { cardsWallet } from "@/util";

export default function Deposit(){
    return(
        <>
            <AdmAside />

            <main className="w-full md:w-[89%] h-screen ml-auto flex flex-col">
                <header className="flex items-center justify-between py-3 px-2 md:px-6 border-b border-b-primary">
                    <AlignJustify size={22} onClick={() => navigate.push(`adm?${redirectPage("true")}`)} className={"sm:block hidden hover:fill-black cursor-pointer"} />

                    <h1 className="text-2xl font-bold">Welcome Dashboard</h1>

                    <div className="flex gap-3">
                        <Bell size={22} className="hover:fill-black cursor-pointer" />
                        <Settings size={22} className="hidden md:block hover:fill-black cursor-pointer" />
                    </div>
                </header>

                <section className="flex-grow w-full h-full flex flex-col md:flex-row items-start justify-between gap-3 px-3 py-6 md:p-6">
                    <div className="w-full flex items-center gap-3">
                        <div className={`w-full md:w-full md:max-w-[50%] h-52 flex flex-col items-start justify-between text-white ${cardsWallet[0].gradient} rounded-lg relative p-8`}>
                            <div className="grid gap-2">
                                <span className="font-bold opacity-60">{cardsWallet[0].name}</span>
                                <h3 className="text-3xl font-semibold">{cardsWallet[0].limit}</h3>
                            </div>

                            <div className="w-full flex items-center justify-between">
                                <div className="text-bold text-[#Ffd700] text-lg">{cardsWallet[0].numberCard}</div>

                                <div className="flex relative">
                                    <div className="w-6 h-6 bg-[#F2F2F2] opacity-30 rounded-full absolute -left-4 order-1"></div>
                                    <div className="w-6 h-6 bg-[#F2F2F2] opacity-30 rounded-full order-2"></div>
                                </div>
                            </div>
                            <Image src="/waveElements.png" className="w-full h-full opacity-80" alt="" fill={true} />
                        </div>
                    </div>

                    <div className="w-4/5 h-full ml-auto shadow-lg border border-zinc-200 rounded-lg">
                        <header className="w-full flex items-center justify-center py-3">
                         <h1 className="text-2xl font-bold">Deposit</h1>
                        </header>
                    </div>
                </section>
            </main>

        </>
    )
}