"use client";
import { Header } from "@/components/Header";
import Image from "next/image";
import { useSearchParams } from "react-router-dom";

export default function Access(){
  const [searchParams] = useSearchParams();
  const [animationClass, setAnimationClass] = useState<string>('');

  return (
    <>
      <Header />

      <main
        className={`w-screen h-[calc(100vh-_64px)] grid grid-cols-login mt-[64px] 
                ${
                  !pages
                    ? 'md:grid-cols-inputs-register'
                    : 'md:grid-cols-[60%_40%]'
                } md:grid-rows-none overflow-y-auto overflow-x-hidden ${animationClass}`}
      >
        <aside
          className={`h-full md:h-5/6 w-full flex items-center justify-center my-auto ${
            pages && 'md:order-1'
          } overflow-hidden`}
        >
          <Image
            src={!pages ? '/aside-login.svg' : '/aside-register.svg'}
            alt=""
            className="w-10/12 h-full mx-auto"
          />
        </aside>

        <div className="w-full h-5/6 flex flex-col items-center my-auto px-8 gap-8 divide-y-2">
          
        </div>
      </main>
    </>
  );

  function handleTogglePages() {
    setAnimationClass(!pages ? 'slide-left' : 'slide-right');
    setPages(!pages);
  }
}