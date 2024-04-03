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
import HeaderAdm from "@/components/HeaderAdm";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Deposit(){
    return(
        <>
            <AdmAside />

            <main className="w-full md:w-[89%] h-screen ml-auto flex flex-col">
                <HeaderAdm />

                <section className="flex-grow w-full h-full flex flex-col md:flex-row items-start justify-between gap-3 px-3 py-6 md:px-2 md:py-4">
                    <div className="w-full h-full flex flex-col items-start gap-3">
                        <div className="w-full h-full flex flex-col gap-6 shadow-lg rounded-lg px-5">
                            <header className="w-full flex items-center justify-start py-3">
                                <h2 className="text-2xl font-bold">Deposit</h2>
                            </header>

                            <Tabs defaultValue="all" className="h-[45%] w-full flex flex-col gap-2 pt-2 pb-4 rounded-lg overflow-y-auto">
                                <TabsList className="w-min flex items-center justify-start bg-transparent border border-[#D9D9D9]">
                                    <TabsTrigger className="w-full px-3 py-2" value="all">All</TabsTrigger>
                                    <TabsTrigger className="w-full px-3 py-2" value="deposits">Deposits</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </div>                    
                </section>
            </main>
        </>
    )
}