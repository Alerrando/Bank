import { AlignJustify, Bell, Settings } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function HeaderAdm() {
  const searchParams = useSearchParams();
  const navigate = useRouter();

  return (
    <header className="w-full md:w-[calc(100%_-_11%)]  flex items-center justify-between py-3 px-2 xl:px-5 border-b border-b-primary absolute top-0 right-0">
      <AlignJustify size={22} onClick={() => navigate.push(`adm?${redirectPage("true")}`)} className={"sm:block hidden hover:fill-black cursor-pointer"} />

      <h1 className="text-2xl font-bold">Welcome Dashboard</h1>

      <div className="flex gap-3">
        <Bell size={22} className="hover:fill-black cursor-pointer" />
        <Settings size={22} className="hidden xl:block hover:fill-black cursor-pointer" />
      </div>
    </header>
  );

  function redirectPage(redirect: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", redirect);
    return params.toString();
  }
}
