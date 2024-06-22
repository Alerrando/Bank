import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CardWalletProps } from "@/context/types";
import { cardsWallet } from "@/util";
import Image from "next/image";

export default function CardsHistory() {
  return (
    <section className="w-full h-full flex flex-col px-3 py-6 xl:p-6 space-y-8 bg-[#F2F2F2] rounded-3xl">
      <section className="w-full flex flex-col gap-3 ">
        <h2 className="w-fit text-lg font-semibold">My Cards</h2>

        <Carousel opts={{ align: "start", loop: true, direction: "ltr" }} className="w-[85%] gap-3 mx-12">
          <CarouselContent>
            {cardsWallet.map((item: CardWalletProps, indexCards: number) => (
              <CarouselItem className={`w-full flex items-center gap-4`} key={Math.random()}>
                <div className={`w-full h-52 flex flex-col items-start justify-between text-white ${item.gradient} rounded-lg relative p-8`} key={indexCards}>
                  <div className="grid gap-2">
                    <span className="font-bold opacity-60">{item.name}</span>
                    <h3 className="text-3xl font-semibold">{item.limit}</h3>
                  </div>

                  <div className="w-full flex items-center justify-between">
                    <div className="text-bold text-[#Ffd700] text-lg">{item.numberCard}</div>

                    <div className="flex relative">
                      <div className="w-6 h-6 bg-[#F2F2F2] opacity-30 rounded-full absolute -left-4 order-1"></div>
                      <div className="w-6 h-6 bg-[#F2F2F2] opacity-30 rounded-full order-2"></div>
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
    </section>
  );
}
