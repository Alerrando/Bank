import { LucidePiggyBank } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';

export function Header() {
  const navigate = useRouter();
  const searchParams = useSearchParams();

  return (
    <header className="w-full h-auto bg-white fixed top-0 border-b border-b-[#00938c] z-10">
      <div className="w-11/12 h-full flex items-center justify-between mx-auto">
        <Link href="/" className="h-16 w-40 cursor-pointer relative">
          <Image src="/logo.png" alt="logo in site" className="object-cover" fill={true} />
        </Link>

        <div className="w-auto h-full flex flex-row items-center justify-center gap-4 py-2">
          <Button
            className="shadow-lg px-4 py-1"
            onClick={() => navigate.push(`access?${redirectPage("login")}`)}
            variant="primary"
          >
            Login
          </Button>

          <Button 
            className="bg-[#00938c] border-[#00938c] px-2 py-1 text-white hover:bg-transparent hover:text-[#00938c]"
            onClick={() => navigate.push(`access?${redirectPage("register")}`)}
            variant="primary"
            >
            Registrar-se
          </Button>
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
