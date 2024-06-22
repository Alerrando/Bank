import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { user } from "@/data/user";
import { ArrowLeftRight, HandCoins } from "lucide-react";

export default function OverviewTabs() {
  return (
    <section className="w-full h-full flex flex-col px-3 py-6 xl:p-6 space-y-8">
      <Tabs defaultValue="all" className="h-full w-full md:h-full flex flex-col gap-2 border shadow-lg rounded-lg overflow-y-auto">
        <TabsList className="w-full h-min flex items-center justify-between px-3 py-2 bg-transparent border-b border-b-zinc-100">
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
                <th className="pl-3 py-1">
                  <HandCoins size={34} />
                </th>
                <th className="font-semibold text-princ text-xs py-1">DEP0001</th>
                <th className="font-semibold text-zinc-400 text-xs py-1">{user.cpf}</th>
                <th className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                  <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                  <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                </th>
              </tr>

              <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                <th className="pl-3 py-1">
                  <ArrowLeftRight size={34} />
                </th>
                <th className="font-semibold text-princ text-xs py-1">TRANS001</th>
                <th className="font-semibold text-zinc-400 text-xs py-1">{user.cpf}</th>
                <th className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                  <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                  <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                </th>
              </tr>
              <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                <th className="pl-3 py-1">
                  <HandCoins size={34} />
                </th>
                <th className="font-semibold text-princ text-xs py-1">DEP0001</th>
                <th className="font-semibold text-zinc-400 text-xs py-1">{user.cpf}</th>
                <th className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                  <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                  <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                </th>
              </tr>

              <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                <th className="pl-3 py-1">
                  <ArrowLeftRight size={34} />
                </th>
                <th className="font-semibold text-princ text-xs py-1">TRANS001</th>
                <th className="font-semibold text-zinc-400 text-xs py-1">{user.cpf}</th>
                <th className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                  <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                  <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                </th>
              </tr>
              <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                <th className="pl-3 py-1">
                  <HandCoins size={34} />
                </th>
                <th className="font-semibold text-princ text-xs py-1">DEP0001</th>
                <th className="font-semibold text-zinc-400 text-xs py-1">{user.cpf}</th>
                <th className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                  <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                  <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                </th>
              </tr>

              <tr className="after:block after:absolute after:w-full after:h-[2px] after:bg-princ after:opacity-10 after:-bottom-1 after:inset-x-0 relative">
                <th className="pl-3 py-1">
                  <ArrowLeftRight size={34} />
                </th>
                <th className="font-semibold text-princ text-xs py-1">TRANS001</th>
                <th className="font-semibold text-zinc-400 text-xs py-1">{user.cpf}</th>
                <th className="w-full font-semibold h-full flex flex-col justify-between text-end py-1 pr-3">
                  <span className="font-semibold text-princ text-xs py-2">R$ 55,00</span>
                  <span className="font-semibold text-zinc-400 text-xs pb-1">21/02/2024 13:05</span>
                </th>
              </tr>
            </tbody>
          </table>
        </TabsContent>

        <TabsContent value="deposits"></TabsContent>
        <TabsContent value="transfers"></TabsContent>
      </Tabs>
    </section>
  );
}
