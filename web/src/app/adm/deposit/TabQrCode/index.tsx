import { InputsProps } from "@/app/access/FormLogin";
import Input from "@/components/Input";
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
    <form action="" className="w-full h-full flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      {inputs.map((input: InputsProps) => (
        <Input input={input} errors={errors} register={register} key={input.name} />
      ))}

      <button className="w-full py-1 text-center font-bold border-[2px] border-black text-base rounded-lg hover:bg-[#00938c] hover:border-[#00938c] hover:text-white transition-colors">
        Generate
      </button>
    </form>
  );

  async function submit(e: SchemaDataType) {
    console.log(e);
  }
}
