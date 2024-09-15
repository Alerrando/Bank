import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CardWalletModel } from "@/models/CardWalletPropsModel";
import { cardsWallet } from "@/util";
import { curveCardinal } from "d3-shape";
import Image from "next/image";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function CardsHistory() {
  const data = [
    {
      name: "Sat",
      uv: 150,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sun",
      uv: 360,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mon",
      uv: 430,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Tue",
      uv: 785,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Wed",
      uv: 205,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Thu",
      uv: 580,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Fri",
      uv: 220,
      pv: 4300,
      amt: 2100,
    },
  ];
  const cardinal = curveCardinal.tension(0.2);

  return (
    <section className="w-full h-full flex flex-col items-center justify-between px-3 py-6 md:px-6 md:py-5 space-y-8 bg-white rounded-3xl overflow-y-auto">
      <section className="w-full flex flex-col gap-3">
        <h2 className="w-fit text-lg font-semibold">My Cards</h2>

        <Carousel opts={{ align: "start", loop: true, direction: "ltr" }} className="w-[85%] gap-3 mx-7 md:mx-12">
          <CarouselContent>
            {cardsWallet.map((item: CardWalletModel, indexCards: number) => (
              <CarouselItem className={`w-full flex items-center gap-4`} key={Math.random()}>
                <div
                  className={`w-full h-44 md:h-52 flex flex-col items-start justify-between text-white ${item.gradient} rounded-lg relative p-8`}
                  key={indexCards}
                >
                  <div className="grid gap-2">
                    <span className="font-bold opacity-60">{item.name}</span>
                    <h3 className="text-3xl font-semibold">{item.limit}</h3>
                  </div>

                  <div className="w-full flex items-center justify-between">
                    <div className="text-bold text-[#Ffd700] text-lg">{item.numberCard}</div>

                    <div className="flex relative">
                      <div className="w-6 h-6 bg-white opacity-30 rounded-full absolute -left-4 order-1"></div>
                      <div className="w-6 h-6 bg-white opacity-30 rounded-full order-2"></div>
                    </div>
                  </div>
                  <Image src="/waveElements.png" className="w-full h-full opacity-100" alt="" fill={true} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="w-full h-full flex flex-col gap-3">
        <h2 className="w-fit text-lg font-semibold">Balance History</h2>

        <ResponsiveContainer width="100%" height="100%" className="bg-white py-4 rounded-3xl">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type={cardinal} dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </section>
  );
}
