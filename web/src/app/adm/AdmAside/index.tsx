import { CreditCard, LayoutGrid, Wallet, X } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function AdmAside() {
    const searchParams = useSearchParams();
    const access = searchParams.get('modal') === "true";
    const navigate = useRouter();

    return (
        <aside className={twMerge("hidden md:w-[11%] h-screen bg-[#222831] py-3 absolute inset-0", 
                    `${access && 'w-full bg-modal h-screen fixed inset-0 z-10 py-0'}`)}
            >
            <div className={twMerge("w-full h-auto flex flex-col gap-7", `${access && "w-[30%] h-full bg-zinc-700 py-2 gap-12"}`)}>
                <div className={twMerge("w-full h-12 flex items-center justify-start relative px-2", `${access && "justify-end"}`)}>
                    <Image className={twMerge("w-full h-full object-cover left-[-6px!important]", `${access && "left-[-13%!important]"}`)} src="/logo.png" alt="logo" fill={true} />

                    {access && <X size={32} className="text-white" onClick={() => navigate.push(`adm?${redirectPage("true")}`)} />}
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
            </div>
        </aside>
    );

    function redirectPage(redirect: string){
        const params = new URLSearchParams(searchParams.toString())
        params.set("modal", redirect);
        return params.toString();
    }
}