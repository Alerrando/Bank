"use client";
import { Header } from "@/components/Header";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";
import "./access.css"
import { Toaster } from "@/components/ui/sonner";

export default function Access(){
  const searchParams= useSearchParams();
  const access = searchParams.get('page') === "login" || searchParams.get('page') === null;

  return (
    <>
      <Header />

      <main
        className={`w-screen h-[calc(100vh-_64px)] grid grid-rows-login mt-[64px] 
                ${access
                    ? 'md:grid-cols-inputs-register'
                    : 'md:grid-cols-[60%_40%]'
                } md:grid-rows-none overflow-y-auto overflow-x-hidden animate-${access}`}
      >
        <aside
          className={`h-full md:h-5/6 w-full flex items-center justify-center my-auto relative ${
            access && 'md:order-1'
          } overflow-hidden`}
        >
          <Image
            src={access ? '/aside-login.svg' : '/aside-register.svg'}
            alt=""
            className="w-full md:w-10/12 h-full mx-auto"
            fill={true}
          />
        </aside>

        <div className="w-full h-5/6 flex flex-col items-center my-auto px-8 gap-8 divide-y-2">
          {access ? (
            <FormLogin handleTogglePages={handleTogglePages} />
          ) : (
            <FormRegister handleTogglePages={handleTogglePages} />
          )}
        </div>
      </main>

      <Toaster />
    </>
  );

  function handleTogglePages(accessNow: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", accessNow);
    return params.toString();
  }
}