import { CreditCard, LayoutGrid, Wallet, X } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function AdmAside() {
    const searchParams = useSearchParams();
    const access = searchParams.get('modal') === "true";
    const navigate = useRouter();

    return (
        <aside className={twMerge("w-[11%] h-screen bg-[#222831] py-3 absolute inset-0", 
                    `${access ? 'sm:w-full sm:bg-modal sm:h-screen sm:fixed sm:inset-0 sm:z-10 sm:py-0' : "hidden md:block"}`)}
            >
            <div className={twMerge("w-full h-auto flex flex-col gap-7", `${access && "sm:w-[65%] sm:h-full sm:bg-zinc-700 sm:py-2 sm:gap-12"}`)}>
                <div className={twMerge("w-full h-12 flex items-center justify-start relative px-2", `${access && "sm:justify-end"}`)}>
                    <Image className={twMerge("object-cover left-[-6px!important]", `${access && "sm:w-[80%!important]  sm:left-[-9%!important]"}`)} src="/logo.png" alt="logo" fill={true} />

                    {access && <X size={32} className="sm:block hidden text-white" onClick={() => navigate.push(`adm?${redirectPage("false")}`)} />}
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