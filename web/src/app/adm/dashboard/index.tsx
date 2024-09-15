"use client";

import AdmAside from "@/components/AdmAside";
import HeaderAdm from "@/components/HeaderAdm";
import CardsHistory from "./cards-history";
import OverviewTabs from "./overview-tabs";

export default function Dashboard() {
  return (
    <>
      <AdmAside />
      <HeaderAdm />
      <main className="w-full xl:w-[89%] h-auto md:h-adm bg-[#F2F2F2] grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-6 md:gap-0 ml-auto mt-14 py-4">
        <OverviewTabs />

        <CardsHistory />
      </main>
    </>
  );
}
