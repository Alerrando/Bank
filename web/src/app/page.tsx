"use client";
import Image from 'next/image';
import { Header } from '@/components/Header';
import { useContext } from 'react';
import { StateContext } from '@/context';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { ArrowRightIcon } from 'lucide-react';

export default function Home() {
  const navigate = useRouter();
  const { user } = useContext(StateContext);
  const searchParams = useSearchParams();

  return (
    <>
      <Header />

      <main className="w-screen h-screen bg-home flex flex-col gap-6 mt-[12%] md:mt-0 md:grid md:grid-cols-2 main-home">
        <section className="w-[92%] md:w-[85%] h-[100%] md:h-4/5 m-auto flex flex-col items-center gap-6 md:justify-between text-white relative">
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

          <div className="w-full h-auto flex items-center justify-between text-black">
            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-lg md:text-2xl font-bold">10+ mil</h2>
              <h2 className="text-sm font-semibold">Usuários Cadastrados</h2>
            </div>

            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-lg md:text-2xl font-bold">5+ mil</h2>
              <h2 className="text-sm font-semibold">Empresas Cadastradas</h2>
            </div>

            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-lg md:text-2xl font-bold">20+ mil</h2>
              <h2 className="text-sm font-semibold">Transações Concluidas</h2>
            </div>
          </div>

          <div className="w-full h-full flex flex-row items-center justify-start gap-4 py-2">
              <Button
                className={twMerge("flex gap-2 items-center hover:bg-princ border-zinc-300 hover:border-princ hover:text-white group", "px-6 py-4 text-lg text-black")}
                variant="primary"
                onClick={() => navigate.push(`access?${redirectPage("login")}`)}
              >
                Get Started
                <ArrowRightIcon size={24} className="text-black group-hover:text-white" />
              </Button>
            
            <Button 
              className={twMerge("flex gap-2 items-center bg-princ border-princ text-white hover:bg-transparent hover:text-princ group", "px-6 py-4 text-lg")}
              variant="primary"
              onClick={() => navigate.push(`access?${redirectPage("register")}`)}
            >
              Sign up
              <ArrowRightIcon size={24} className="text-white group-hover:text-princ" />
            </Button>

            
        </div>
        </section>

        <aside className="w-[80%] md:w-full h-2/4 md:h-[60%] flex items-center justify-center mx-auto md:my-auto relative">
          <Image src="/cards.png" alt="" className="w-full h-full object-cover" fill={true} />
        </aside>
      </main>
    </>
  );

  function redirectPage(redirect: string){
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", redirect);
    return params.toString();
  }
}
