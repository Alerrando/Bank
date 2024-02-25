import { Bell, Settings } from "lucide-react";
import AdmAside from "./AdmAside";
import { CardsAdm, CardsAdmProps } from "@/components/CardsAdm";
import Image from "next/image";
import { CardWalletProps } from "@/context/types";

export default function Adm(){
    const cardsWallet: CardWalletProps[] = [
        {
            name: "Main Wallet",
            limit: "$45.500,12",
            numberCard: "444 221 224 ***",
            gradient: {
                start: "rgba(133,85,193,1)",
                end: "rgba(180,105,255,1)"
            }
        },
        {
            name: "Main Wallet",
            limit: "$45.500,12",
            numberCard: "444 221 224 ***",
            gradient: {
                start: "rgba(248,104,147,1)",
                end: "rgba(218,28,199,1)"
            }
        },
        {
            name: "XYZ Wallet",
            limit: "$250,5",
            numberCard: "444 221 224 ***",
            gradient: {
                start: "rgba(141,210,52,1)",
                end: "rgba(46,175,74,1)"
            }
        },

        {
            name: "XYZ Wallet",
            limit: "$250,5",
            numberCard: "444 221 224 ***",
            gradient: {
                start: "rgba(108,149,255,1)",
                end: "rgba(61,105,219,1)"
            }
        },
       
    ]

    return(
        <>
            <AdmAside />
            <main className="w-[89%] h-screen ml-auto">
                <header className="flex items-center justify-between py-3 px-6 border-b border-b-primary">
                    <h1 className="text-2xl font-bold">Welcome Dashboard</h1>

                    <div className="flex gap-3">
                        <Bell size={22} className="hover:fill-black cursor-pointer" />
                        <Settings size={22} className="hover:fill-black cursor-pointer" />
                    </div>
                </header>

                <section className="w-full grid gap-3 p-6">
                    <h2 className="text-lg font-semibold">My Cards</h2>

                    <div className="w-full flex items-center gap-3">
                    {cardsWallet.map((card: CardWalletProps, index: Key) => (
                            <>
                                <div className={`w-[30%] h-52 flex flex-col items-start justify-between text-white bg-gradient-to-r from-[${card.gradient.start}] from-0% via-[${card.gradient.end}] via-100% rounded-lg relative p-8`}>
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
                                    <Image src="/waveElements.png" className="w-full h-full opacity-60" alt="" fill={true} />
                                </div>
                            </>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}