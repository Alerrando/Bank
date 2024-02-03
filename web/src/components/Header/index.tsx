import { LucidePiggyBank } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full h-auto bg-white fixed top-0 border-b border-b-[#00938c] z-10">
      <div className="w-11/12 h-full flex items-center justify-between mx-auto">
        <Link href="/" className="h-16 w-16 cursor-pointer">
          <LucidePiggyBank className="w-full h-full" />
        </Link>

        <div className="w-auto h-full flex flex-row items-center justify-center gap-4 py-2">
          <Link
            href="/login"
            className="hover:bg-[#00938c] border border-transparent hover:border-[#00938c] hover:text-white px-4 py-1 rounded-lg cursor-pointer transition-all"
          >
            Login
          </Link>

          <button className="bg-[#00938c] border border-[#00938c] px-2 py-1 rounded-lg text-white hover:bg-transparent hover:text-[#00938c] transition-all">
            Registrar-se
          </button>
        </div>
      </div>
    </header>
  );
}
