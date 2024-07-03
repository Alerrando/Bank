import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { user } from "@/data/user";
import { ArrowLeftRight, ChevronUp, HandCoins } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type Data = {
  name: string;
  dep: number;
  withd: number;
  total: number;
};

export default function OverviewTabs() {
  const data: Data[] = [
    {
      name: "Jan",
      dep: 150,
      withd: 2400,
      total: 2400,
    },
    {
      name: "Feb",
      dep: 360,
      withd: 1398,
      total: 2210,
    },
    {
      name: "Mar",
      dep: 2000,
      withd: 9800,
      total: 2290,
    },
    {
      name: "Apr",
      dep: 2780,
      withd: 3908,
      total: 2000,
    },
    {
      name: "May",
      dep: 1890,
      withd: 4800,
      total: 2181,
    },
    {
      name: "Jun",
      dep: 2390,
      withd: 3800,
      total: 2500,
    },
    {
      name: "Jul",
      dep: 3490,
      withd: 4300,
      total: 2100,
    },
    {
      name: "Aug",
      dep: 3490,
      withd: 4300,
      total: 2100,
    },
    {
      name: "Sep",
      dep: 3490,
      withd: 4300,
      total: 2100,
    },
    {
      name: "Oct",
      dep: 3490,
      withd: 4300,
      total: 2100,
    },
    {
      name: "Nov",
      dep: 3490,
      withd: 4300,
      total: 2100,
    },
    {
      name: "Dec",
      dep: 3490,
      withd: 4300,
      total: 2100,
    },
  ];

  return (
    <section className="w-full h-adm flex flex-col px-1 md:px-2 space-y-8">
      <div className="w-full h-full flex flex-col gap-9 bg-[#F2F2F2] px-2 md:px-4 py-4 rounded-2xl">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg md:text-xl">Overview Balance</h2>

            <span className="text-xs md:text-base text-[#969696]">Lorem ipsum dolor sit amet, consectetur</span>
          </div>

          <select disabled id="countries_disabled" className="w-36 md:w-44 text-sm rounded-full p-3 md:p-5 bg-transparent cursor-pointer outline-none border">
            <option value="year-2020" selected>
              Year (2024)
            </option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm md:text-base">
            Last Year <span className="text-[#37D159]">$563,443</span>
          </span>

          <div className="flex items-center gap-4">
            <h2 className="font-semibold text-xl md:text-3xl">$557,235.31</h2>

            <div className="flex items-center">
              <span className="text-sm md:text-base text-[#37D159]">7%</span>
              <ChevronUp className="w-3 h-3 md:w-4 md:h-4 text-[#37D159]" />
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            className="h-[320px!important] md:h-[300px!important]"
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
            <Tooltip />
            <Bar dataKey="dep" barSize={15} fill="#22c55e" />
            <Bar dataKey="withd" barSize={15} fill="#ef4444" />
            <Bar dataKey="total" barSize={15} fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Tabs defaultValue="all" className="h-[70%] w-full flex flex-col gap-2 border shadow-lg rounded-lg overflow-y-auto bg-[#F2F2F2]">
        <TabsList className="w-full h-min flex items-center justify-between px-3 py-2 bg-transparent border-b border-b-zinc-100">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="dep">Deposits</TabsTrigger>
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

        <TabsContent value="dep"></TabsContent>
        <TabsContent value="transfers"></TabsContent>
      </Tabs>
    </section>
  );
}
