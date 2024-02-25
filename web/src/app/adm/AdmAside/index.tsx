import { CreditCard, LayoutGrid, Wallet } from "lucide-react";
import Image from "next/image";

export default function AdmAside() {
    return (
        <aside className="w-[11%] h-screen bg-[#222831] py-3 flex flex-col gap-7 absolute inset-0">
            <div className="w-full h-12 flex items-center justify-start relative px-2">
                <Image className="w-full h-full object-cover left-[-6px!important]" src="/logo.png" alt="logo" fill={true} />
            </div>

            <div className="flex flex-col gap-4">
                <div className="w-full flex items-center gap-2 text-white hover:bg-primary px-3 py-2 cursor-pointer">
                    <LayoutGrid size={22} />
                    <span className="text-base">Dashboard</span>
                </div>

                <div className="w-full flex items-center gap-2 text-white hover:bg-primary px-3 py-2 cursor-pointer">
                    <CreditCard size={22} />
                    <span className="text-base">Balances</span>
                </div>

                <div className="w-full flex items-center gap-2 text-white hover:bg-primary px-3 py-2 cursor-pointer">
                    <Wallet size={22} />
                    <span className="text-base">Transactions</span>
                </div>
            </div>
        </aside>
    )
}