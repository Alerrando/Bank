"use client";
import Image from 'next/image';
import { Header } from '@/components/Header';
import { useContext } from 'react';
import { StateContext } from '@/context';
import { useStore } from 'zustand';

export default function Home() {
  const store = useContext(StateContext)
  const { user } = useStore(store)
  const peoples = [
    '/people(1).jpg',
    '/people(2).jpg',
    '/people(3).jpg',
    '/people(4).jpg',
  ];

  console.log(user);

  return (
    <>
      <Header />

      <main className="w-screen h-screen bg-home flex flex-col gap-6 mt-[12%] md:mt-0 md:grid md:grid-cols-2 main-home">
        <section className="w-4/5 h-[100%] md:h-4/5 mb-auto mx-auto flex flex-col items-center gap-6 md:justify-between text-white relative">
          <div className=""></div>

          <div className="flex flex-col gap-1 md:gap-2 items-center justify-center text-black">
            <h1 className="text-2xl md:text-6xl font-bold">
              Um site, tudo <span className="text-[#00938c]">relacionado</span>{' '}
              a <span className="text-[#00938c]">dinheiro</span>
            </h1>
            <p className="font-semibold opacity-60">
              Desde fácil gerenciamento de dinheiro até vantagens em viagens e
              investimentos. Abra sua conta rapidamente
            </p>
          </div>

          <div className="w-full h-auto flex items-center justify-end absolute top-[80%] md:top-[72%]">
            {peoples.map((people: string, index: number) => (
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full relative" key={index}>
                <Image
                  src={people}
                  alt=""
                  className={`rounded-full object-cover absolute inset-y-0`}
                  style={{ right: `${index * 16}px` }}
                  fill={true}
                />
              </div>
            ))}

            <div className="w-16 h-12 flex items-center justify-center rounded-full bg-blue-500 absolute right-0">
              <span className="font-bold">10K</span>
            </div>
          </div>

          <div className="w-full h-auto flex items-center justify-between text-black">
            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-xl md:text-3xl font-bold">10+ mil</h2>
              <h2 className="text-base font-semibold">Usuários Cadastrados</h2>
            </div>

            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-xl md:text-3xl font-bold">5+ mil</h2>
              <h2 className="text-base font-semibold">Empresas Cadastradas</h2>
            </div>

            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-xl md:text-3xl font-bold">20+ mil</h2>
              <h2 className="text-base font-semibold">Transações Concluidas</h2>
            </div>
          </div>
        </section>

        <aside className="w-[80%] md:w-full h-2/4 md:h-[60%] flex items-center justify-center mx-auto md:my-auto relative">
          <Image src="/cards.png" alt="" className="w-full h-full object-cover" fill={true} />
        </aside>
      </main>
    </>
  );
}
