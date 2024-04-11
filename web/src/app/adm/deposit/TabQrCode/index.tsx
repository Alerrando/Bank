import Input from "@/components/Input";
import { InputsProps } from "@/context/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schemaData = z.object({
  value: z
    .string({ invalid_type_error: "Name must be a string" })
    .nullable()
    .transform((val) => Number(val)),
});

type SchemaDataType = z.infer<typeof schemaData>;

export default function TabQrCode() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SchemaDataType>({
    resolver: zodResolver(schemaData),
  });
  const inputs: InputsProps[] = [
    {
      classNameGrid: "items-start",
      name: "value",
      nameSpan: "Value",
      placeholder: "20.00",
      type: "string",
    },
  ];
  return (
    <>
      <form action="" className="w-full flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
        {inputs.map((input: InputsProps) => (
          <Input input={input} errors={errors} register={register} key={input.name} />
        ))}

        <button className="w-full py-1 text-center font-bold border-[2px] border-black text-base rounded-lg hover:bg-[#00938c] hover:border-[#00938c] hover:text-white transition-colors">
          Generate
        </button>
      </form>

      <section className="flex flex-col mt-4">
        <h2 className="text-2xl font-bold">Preview: </h2>

        <div className="w-full md:w-[65%] flex flex-col mx-auto px-8 py-3 bg-white border border-[#F2F2F2] shadow-md rounded-lg gap-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold">Boleto</h2>
              <p className="text-sm text-gray-500">Data de Vencimento: 10/03/2024</p>
            </div>

            <img src="/logo.png" alt="Logo" className="w-36 h-full object-contain" />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="text-sm">
              <h3 className="text-lg font-semibold">Dados do Pagador</h3>
              <p className="text-gray-500 mb-2">Nome: Fulano de Tal</p>
              <p className="text-gray-500 mb-2">CPF: 123.456.789-00</p>
              <p className="text-gray-500 mb-2">Endereço: Rua Exemplo, 123</p>
              <p className="text-gray-500 mb-2">Cidade: Exemplolândia</p>
              <p className="text-gray-500 mb-2">CEP: 12345-678</p>
            </div>

            <div className="text-sm">
              <h3 className="text-lg font-semibold">Dados do Boleto</h3>
              <p className="text-gray-500 mb-2">Valor: R$ 100,00 (cem reais e zero centavos)</p>
              <p className="text-gray-500 mb-2">Vencimento: 10/03/2024</p>
              <p className="text-gray-500 mb-2">Beneficiário: Empresa Exemplo LTDA</p>
              <p className="text-gray-500 mb-2">Agência: 1234</p>
              <p className="text-gray-500 mb-2">Conta: 123456-7</p>
            </div>
          </div>

          <div className="text-sm">
            <p className="text-sm text-gray-500">Este boleto foi gerado automaticamente pelo sistema.</p>
          </div>
        </div>
      </section>
    </>
  );

  async function submit(e: SchemaDataType) {
    console.log(e);
  }
}
