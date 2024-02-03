import { LucidePiggyBank } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export function Header() {
  const navigate = useRouter();
  const searchParams = useSearchParams();

  return (
    <header className="w-full h-auto bg-white fixed top-0 border-b border-b-[#00938c] z-10">
      <div className="w-11/12 h-full flex items-center justify-between mx-auto">
        <Link href="/" className="h-16 w-16 cursor-pointer">
          <LucidePiggyBank className="w-full h-full" />
        </Link>

        <div className="w-auto h-full flex flex-row items-center justify-center gap-4 py-2">
          <button
            className="hover:bg-[#00938c] border border-transparent hover:border-[#00938c] hover:text-white px-4 py-1 rounded-lg cursor-pointer transition-all"
            onClick={() => navigate.push(`access?${redirectPage("login")}`)}
          >
            Login
          </button>

          <button 
            className="bg-[#00938c] border border-[#00938c] px-2 py-1 rounded-lg text-white hover:bg-transparent hover:text-[#00938c] transition-all"
            onClick={() => navigate.push(`access?${redirectPage("register")}`)}
            >
            Registrar-se
          </button>
        </div>
      </div>
    </header>
  );

  function redirectPage(redirect: string){
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", redirect);
    return params.toString();
  }
}
