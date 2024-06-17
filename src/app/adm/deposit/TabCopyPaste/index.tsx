import Input from "@/components/Input";
import { useStore } from "@/context";
import { InputsProps } from "@/context/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { QrCodePix } from "qrcode-pix";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schemaData = z.object({
  copyPaste: z
    .string({ invalid_type_error: "Name must be a string" })
    .nullable()
    .transform((val) => Number(val)),
  qrCode: z
    .string({ invalid_type_error: "Name must be a string" })
    .nullable()
    .transform((val) => Number(val)),
});

export type SchemaDepositDataType = z.infer<typeof schemaData>;
type GenerateType = "copyPaste" | "qrCode";

export default function TabCopyPaste() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SchemaDepositDataType>({
    resolver: zodResolver(schemaData),
  });
  const { toastMessageLogin } = useStore();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const generate = searchParams.get("generate") || "copyPaste";
  const navigate = useRouter();
  const [generates, setGenerates] = useState({
    copypaste: "",
    qrcode: "",
  });
  const inputs: InputsProps[] = [
    {
      classNameGrid: "items-start",
      name: "copyPaste",
      nameSpan: "Value",
      placeholder: "20.00",
      type: "text",
    },

    {
      classNameGrid: "items-start",
      name: "qrCode",
      nameSpan: "Value",
      placeholder: "20.00",
      type: "text",
    },
  ];

  return (
    <form action="" className="w-full h-full flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      {inputs.map((input: InputsProps, index: number) => (
        <div className="flex flex-col gap-4" key={index}>
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
              onMouseUp={() => handleMouseUp()}
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
        </div>
      ))}

      {loading && (
        <div className="w-screen h-screen fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </form>
  );

  async function submit(e: SchemaDepositDataType) {
    setTimeout(() => {
      if (generate !== null && e[generate as GenerateType] === 0) {
        toastMessageLogin({ message: "Value of field must be greater than 0", status: false });
        return;
      }

      toastMessageLogin({ message: "Copied to clipboard", status: true });
    }, 2000);

    if (generate === "copyPaste") {
      const aux = generatePixCode(e.copyPaste);
      setGenerates({ ...generates, copypaste: aux });
    } else {
      const aux = await generateQrCode(e.qrCode);
      setGenerates({ ...generates, qrcode: aux });
    }
  }

  function handleButtonGenerate(index: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("generate", index === 0 ? "copyPaste" : "qrCode");
    return params.toString();
  }

  function generatePixCode(value: number) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 20;
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return (result += value);
  }

  async function generateQrCode(value: number) {
    const pix = QrCodePix({
      city: "Rancharia",
      key: "51858773830",
      name: "Alerrando Breno",
      version: "01",
      value: value,
    });

    const qrCodeBase64 = await pix.base64();
    return qrCodeBase64;
  }

  function handleMouseUp() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }
}
