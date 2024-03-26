"use client";

import { AlignJustify, Bell, Settings } from "lucide-react";
import { MdPix } from "react-icons/md";
import AdmAside from "../AdmAside";
import Image from "next/image";
import { cardsWallet } from "@/util";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Head from "next/head";

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
                    <div className="w-full h-full flex flex-col items-start gap-3">
                        <div className="w-full h-full flex flex-col gap-6 shadow-lg border border-zinc-200 rounded-lg px-8">
                            <header className="w-full flex items-center justify-center py-3 border-b border-b-[#F2F2F2]">
                                <h2 className="text-2xl font-bold">Deposit</h2>
                            </header>

                            <div className="w-full flex items-center gap-1 p-2 border border-zinc-200 rounded-lg cursor-default">
                                <MdPix size={24} className="text-black" />
                                <span>Pix</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full h-full"></div>
                </section>
            </main>
        </>
    )
}