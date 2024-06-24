import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { user } from "@/data/user";
import { ArrowLeftRight, ChevronUp, HandCoins } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function OverviewTabs() {
  const data = [
    {
      name: "01",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "02",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "03",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "04",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "05",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "06",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "07",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "08",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "09",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "10",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "11",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "12",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <section className="w-full h-adm flex flex-col px-3 py-6 xl:p-6 space-y-8">
      <div className="w-full h-full flex flex-col gap-9">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Overview Balance</h2>

            <span className="text-[#969696]">Lorem ipsum dolor sit amet, consectetur</span>
          </div>

          <select disabled id="countries_disabled" className="w-44 text-sm rounded-full p-5 bg-transparent cursor-pointer outline-none border">
            <option value="year-2020" selected>
              Year (2020)
            </option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base">
            Last Year <span className="text-[#37D159]">$563,443</span>
          </span>

          <div className="flex items-center gap-4">
            <h2 className="font-semibold text-3xl">$557,235.31</h2>

            <div className="flex">
              <span className="text-[#37D159]">7%</span>
              <ChevronUp className="text-[#37D159]" />
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="pv" barSize={20} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Tabs defaultValue="all" className="h-full w-full md:h-[50%] flex flex-col gap-2 border shadow-lg rounded-lg overflow-y-auto">
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

            <tbody className="py-2 overflow-y-auto">
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
