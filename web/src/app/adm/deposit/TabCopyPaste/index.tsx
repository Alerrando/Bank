import Input from "@/components/Input";
import { InputsProps } from "@/context/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { QrCodePix } from "qrcode-pix";
import { Key, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schemaData = z.object({
  valueCopyPaste: z
    .string({ invalid_type_error: "Name must be a string" })
    .nullable()
    .transform((val) => Number(val)),
  valueQrCode: z
    .string({ invalid_type_error: "Name must be a string" })
    .nullable()
    .transform((val) => Number(val)),
});

type SchemaDataType = z.infer<typeof schemaData>;

export default function TabCopyPaste() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SchemaDataType>({
    resolver: zodResolver(schemaData),
  });
  const searchParams = useSearchParams();
  const generate = searchParams.get("generate");
  const navigate = useRouter();
  const [generates, setGenerates] = useState({
    copypaste: "",
    qrcode: "",
  });
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
    <form action="" className="w-full h-full flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      {inputs.map((input: InputsProps, index: Key) => (
        <>
          <Input input={input} errors={errors} register={register} />

          <div className="w-full flex items-end gap-2">
            <div className={`w-full flex flex-col gap-1 ${input.classNameGrid} justify-start text-black`} key={index}>
              <div className="w-4/5 text-start">
                <span className="font-bold">{index === 0 ? "Pix Copy and Paste" : "QR Code"}</span>
              </div>

              <div className={`w-full h-9 border-2 border-[#00938c] rounded-lg py-1 2xl:py-2 px-3 ${index !== 0 && "hidden"}`}>
                <span>{generates.copypaste}</span>
              </div>
            </div>

            <button
              className="px-4 py-1 font-bold border-[2px] border-black text-base rounded-lg hover:bg-[#00938c] hover:border-[#00938c] hover:text-white transition-colors"
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

          {index === 1 && generates.qrcode.length > 0 && (
            <div className="mx-auto">
              <img src={generates.qrcode} alt={"QR Code PIX"} />
            </div>
          )}
        </>
      ))}
    </form>
  );

  async function submit(e: SchemaDataType) {
    if (generate === "copypaste") {
      const aux = generatePixCode(e.valueCopyPaste);
      setGenerates({ ...generates, copypaste: aux });
    } else {
      const aux = await generateQrCode(e.valueQrCode);
      setGenerates({ ...generates, qrcode: aux });
    }
  }

  function handleButtonGenerate(index: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("generate", index === 0 ? "copypaste" : "qrcode");
    return params.toString();
  }

  function generatePixCode(value) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 20;
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return (result += value);
  }

  async function generateQrCode(value) {
    const pix = QrCodePix({
      city: "Rancharia",
      key: "51858773830",
      name: "Alerrando Breno",
      version: "01",
      value: parseFloat(value),
    });

    const qrCodeBase64 = await pix.base64();
    return qrCodeBase64;
  }
}
