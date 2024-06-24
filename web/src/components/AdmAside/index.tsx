import { CreditCard, LayoutGrid, Wallet, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { TbPigMoney, TbTransform } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

export default function AdmAside() {
  const searchParams = useSearchParams();
  const access = searchParams.get("modal") === "true";
  const navigate = useRouter();

  console.log(access);

  return (
    <aside
      className={twMerge(
        "w-[11%] h-full bg-[#222831] py-3 absolute inset-0",
        `${access ? "w-full bg-modal h-screen fixed inset-0 z-10 py-0" : "hidden md:block"}`,
      )}
    >
      <div className={twMerge("w-full h-auto flex flex-col gap-7", `${access && "w-[65%] h-full bg-zinc-700 py-2 gap-12"}`)}>
        <div className={twMerge("w-full h-12 flex items-center justify-start relative px-2", `${access && "justify-end"}`)}>
          <Image
            className={twMerge("object-cover left-[-6px!important]", `${access && "w-[80%!important]  left-[-9%!important]"}`)}
            src="/logo.png"
            alt="logo"
            fill={true}
          />

          {access && <X size={32} className="block md:hidden text-white" onClick={() => navigate.push(`adm?${redirectPage("false")}`)} data-testid="x-close" />}
        </div>

        <nav className="flex flex-col gap-4">
          <Link href="/adm" className="w-full flex items-center gap-2 text-white hover:bg-primary px-3 py-2 cursor-pointer">
            <LayoutGrid size={22} />
            <span className="text-base">Dashboard</span>
          </Link>

          <div className="w-full flex items-center gap-2 text-white hover:bg-primary px-3 py-2 cursor-pointer">
            <CreditCard size={22} />
            <span className="text-base">Balances</span>
          </div>

          <div className="w-full flex items-center gap-2 text-white hover:bg-primary px-3 py-2 cursor-pointer relative group z-20">
            <Wallet size={22} />
            <span className="text-base">Transactions</span>

            <ul className="w-max h-auto hidden group-hover:flex flex-col items-center justify-center text-black absolute left-full shadow-lg bg-[#FAFAFA] border border-[#00000025] rounded-lg">
              <Link
                href="/adm/deposit?generate=copyPaste"
                className="flex items-center gap-1 text-sm text-start px-[14px] py-[6px] hover:bg-[#3b6ea1] hover:text-white rounded-lg transition-colors"
              >
                <TbPigMoney size={18} />
                <span className="text-lg font-semibold">Deposit</span>
              </Link>

              <Link
                href="/adm/transfer"
                className="flex items-center gap-1 text-sm text-start px-[14px] py-[6px] hover:bg-[#3b6ea1] hover:text-white rounded-lg transition-colors"
              >
                <TbTransform size={18} />
                <span className="text-lg font-semibold">Transfer</span>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );

  function redirectPage(redirect: string) {
    console.log(redirect);
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", redirect);
    return params.toString();
  }
}
