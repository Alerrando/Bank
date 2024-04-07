"use client";

import { InputsProps } from "@/app/access/FormLogin";
import HeaderAdm from "@/components/HeaderAdm";
import Input from "@/components/Input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { TabsContent } from "@radix-ui/react-tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { Key } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AdmAside from "../AdmAside";

const schemaData = z.object({
  valueCopyPaste: z
    .string()
    .nullable()
    .transform((val) => Number(val)),
  valueQrCode: z
    .string()
    .nullable()
    .transform((val) => Number(val)),
});

type SchemaDataType = z.infer<typeof schemaData>;

export default function Deposit() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SchemaDataType>({
    resolver: zodResolver(schemaData),
  });
  const searchParams = useSearchParams();
  const navigate = useRouter();
  const inputs: InputsProps[] = [
    {
      classNameGrid: "items-start",
      name: "valueCopyPaste",
      nameSpan: "Value",
      placeholder: "20.00",
      type: "string",
    },

    {
      classNameGrid: "items-start",
      name: "valueQrCode",
      nameSpan: "Value",
      placeholder: "20.00",
      type: "string",
    },
  ];

  return (
    <>
      <AdmAside />

      <main className="w-full md:w-[89%] h-screen ml-auto flex flex-col">
        <HeaderAdm />

        <section className="flex-grow w-full h-full flex flex-col md:flex-row items-start justify-between gap-3 px-3 py-6 md:px-2 md:py-4">
          <div className="w-full h-full flex flex-col items-start gap-3">
            <div className="w-full h-full flex flex-col gap-4 shadow-lg rounded-lg px-5">
              <header className="w-full flex items-center justify-start py-3">
                <h2 className="text-2xl font-bold">Deposit</h2>
              </header>

              <Tabs defaultValue="pix" className="w-full flex flex-col gap-2 pt-2 pb-4 rounded-lg overflow-y-auto">
                <TabsList className="w-min flex items-center justify-start bg-transparent border border-[#D9D9D9]">
                  <TabsTrigger className="w-full px-4 py-2 text-xl" value="pix">
                    Pix
                  </TabsTrigger>
                  <TabsTrigger className="w-full px-4 py-2 text-xl" value="ticket">
                    Ticket
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="pix">
                  <form action="" className="w-full h-full flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
                    {inputs.map((input: InputsProps, index: Key) => (
                      <>
                        <Input input={input} errors={errors} register={register} />

                        <div className="w-full flex items-end gap-2">
                          <div
                            className={`w-full flex flex-col gap-1 ${input.classNameGrid} justify-start text-black`}
                            key={index}
                          >
                            <div className="w-4/5 text-start">
                              <span className="font-bold">{index === 0 ? "Pix Copy and Paste" : "QR Code"}</span>
                            </div>

                            <div
                              className={`w-full h-9 border-2 border-[#00938c] rounded-lg py-1 2xl:py-2 px-3 ${index !== 0 && "hidden"}`}
                            >
                              <span></span>
                            </div>
                          </div>

                          <button
                            className="px-4 py-1 border border-black text-base rounded-lg hover:bg-[#00938c] hover:border-[#00938c] hover:text-white transition-colors"
                            onClick={() => navigate.push(`deposit?${handleButtonGenerate(index)}`)}
                          >
                            Generate
                          </button>
                        </div>

                        {index === 0 && (
                          <div className="w-full flex items-center gap-3">
                            <span className="w-full h-[2px] bg-black"></span>
                            <span className="font-bold">{"//"}</span>
                            <span className="w-full h-[2px] bg-black"></span>
                          </div>
                        )}
                      </>
                    ))}
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </>
  );

  function submit(e: SchemaDataType) {
    console.log(e);
  }

  function handleButtonGenerate(index: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("generate", index === 0 ? "copypaste" : "qrcode");
    return params.toString();
  }
}
