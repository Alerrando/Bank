"use client";
import AdmAside from "@/components/AdmAside";
import HeaderAdm from "@/components/HeaderAdm";
import Input from "@/components/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { isAuth, useStore } from "@/context";
import { InputsProps } from "@/context/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schemaData = z.object({
  value: z
    .string({ invalid_type_error: "Name must be a string" })
    .nullable()
    .transform((val) => Number(val)),
  email: z.string().email("Email invalid!").max(255, "The email must have a maximum of 255 characters"),
  cpf: z.string().min(3, "The CPF must have at least 3 characters").max(14, "The CPF must have a maximum of 14 characters"),
  phone: z.string().regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Invalid Number!"),
});

export type SchemaTransferDataType = z.infer<typeof schemaData>;

export default function Transfer() {
  const { authenticated } = useStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SchemaTransferDataType>({
    resolver: zodResolver(schemaData),
  });
  const inputs: InputsProps[] = [
    {
      classNameGrid: "items-start",
      name: "value",
      nameSpan: "Value",
      placeholder: "20.00",
      type: "text",
    },
    {
      classNameGrid: "items-start",
      name: "email",
      nameSpan: "Email",
      placeholder: "test@gmail.com",
      type: "email",
    },
    {
      classNameGrid: "items-start",
      name: "cpf/cnpj",
      nameSpan: "CPF/CNPJ",
      placeholder: "CPF/CNPJ",
      type: "text",
    },
    {
      classNameGrid: "items-start",
      name: "phone",
      nameSpan: "Phone",
      placeholder: "123456789",
      type: "tel",
    },
    {
      classNameGrid: "items-start",
      name: "random",
      nameSpan: "Random Key",
      placeholder: "",
      type: "text",
    },
  ];

  if (!isAuth(Transfer, authenticated)) {
    redirect("/");
  }

  return (
    <>
      <AdmAside />

      <main className="w-full md:w-[89%] h-screen ml-auto flex flex-col">
        <HeaderAdm />

        <section className="flex-grow w-full h-full flex flex-col md:flex-row items-start justify-between gap-3 px-3 py-6 md:px-2 md:py-4">
          <div className="w-full h-full flex flex-col items-start gap-3">
            <div className="w-full h-full flex flex-col gap-4 rounded-lg px-5">
              <header className="w-full flex items-center justify-start pt-3">
                <h2 className="text-2xl font-bold">Transfer</h2>
              </header>
              <form action="" className="w-full flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
                <Input input={inputs[0]} errors={errors} register={register} />
              </form>

              <Tabs defaultValue="email" className="w-full flex flex-col gap-4 rounded-lg overflow-y-auto">
                <TabsList className="w-min flex items-center justify-start bg-transparent border border-[#D9D9D9]">
                  {inputs.map((input: InputsProps, index: number) => (
                    <>
                      {index > 0 && (
                        <TabsTrigger className="w-full px-4 py-2 text-xl" value={input.name}>
                          {input.nameSpan}
                        </TabsTrigger>
                      )}
                    </>
                  ))}
                </TabsList>

                {inputs.map((input: InputsProps, index: number) => (
                  <>
                    {index > 0 ? (
                      <TabsContent value={input.name} className="w-full flex flex-col md:flex-row items-start md:items-end gap-2">
                        <Input input={input} errors={errors} register={register} />
                        <button className="px-4 py-1 font-bold border-[2px] border-black text-base rounded-lg hover:bg-[#00938c] hover:border-[#00938c] hover:text-white transition-colors">
                          Transfer
                        </button>
                      </TabsContent>
                    ) : null}
                  </>
                ))}
              </Tabs>
            </div>

            <img src="/img-transfer.svg" alt="" className="w-1/2 h-full mx-auto" />
          </div>
        </section>
      </main>
    </>
  );

  function submit(e: SchemaTransferDataType) {
    console.log(e);
  }
}
