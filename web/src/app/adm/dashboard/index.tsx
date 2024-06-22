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
      <main className="w-full xl:w-[89%] h-[calc(98vh_-_64px)] grid grid-cols-2 ml-auto mt-16">
        <OverviewTabs />

        <CardsHistory />
      </main>
    </>
  );
}
