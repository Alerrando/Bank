import { Bell, Settings } from "lucide-react";
import AdmAside from "./AdmAside";

export default function Adm(){
    return(
        <>
            <AdmAside />
            <main className="w-[90%] h-screen ml-auto">
                <header className="flex items-center justify-between py-3 px-7 border-b border-b-primary">
                    <h1 className="text-2xl font-bold">Welcome Dashboard</h1>

                    <div className="flex gap-3">
                        <Bell size={22} className="hover:fill-black cursor-pointer" />
                        <Settings size={22} className="hover:fill-black cursor-pointer" />
                    </div>
                </header>
            </main>
        </>
    )
}