import { Toaster } from "@/components/ui/sonner";
import { InputsProps, ResponseMessage, UserProps } from "@/context/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { format, isValid, parseISO } from "date-fns";
import { CheckCheck, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Key, useContext } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { toast } from "sonner";
import { z } from "zod";
import { createUser } from "../../../api";
import { StateContext } from "../../../context";

const schema = z.object({
  name: z.string().min(3, "The name must have at least 3 characters").max(255, "O nome deve ter no máximo 255 caracteres"),
  email: z.string().email("Email invalid!").max(255, "The email must have a maximum of 255 characters"),
  cpf: z.string().min(3, "The CPF must have at least 3 characters").max(14, "The CPF must have a maximum of 14 characters"),
  password: z.string().min(3, "Password must be at least 3 characters long"),
  cep: z.string().min(9, "The zip code must have at least 3 characters").max(9, "The zip code must have a maximum of 9 characters"),
  dateOfBirth: z.string().refine((val) => {
    return isValid(parseISO(val));
  }, "Invalid date of birth"),
  addressNumber: z.string().min(1, "The house number must be at least 1 characters long"),
});

export type SchemaTypeRegister = z.infer<typeof schema>;

type UserRegister = {
  totalValue: number;
} & SchemaTypeRegister;

type FormRegisterProps = {
  handleTogglePages: (accessNow: string) => void;
};

export function FormRegister({ handleTogglePages }: FormRegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaTypeRegister>({
    resolver: zodResolver(schema),
  });
  const { setUser } = useContext(StateContext);
  const navigate = useRouter();

  const inputs: InputsProps[] = [
    {
      nameSpan: "Nome",
      classNameGrid: "items-start",
      name: "name",
      placeholder: "Digite seu nome",
      type: "text",
    },
    {
      nameSpan: "Email",
      classNameGrid: "items-end",
      name: "email",
      placeholder: "Digite seu email",
      type: "email",
    },
    {
      nameSpan: "CPF",
      classNameGrid: "items-start",
      name: "cpf",
      placeholder: "Digite seu CPF",
      mask: "999.999.999-99",
      type: "text",
    },
    {
      nameSpan: "Cep",
      classNameGrid: "items-end",
      name: "cep",
      placeholder: "Digite seu cep",
      type: "text",
    },
    {
      nameSpan: "Senha",
      classNameGrid: "items-start",
      name: "password",
      placeholder: "Digite sua senha",
      type: "password",
    },
    {
      nameSpan: "Número da sua casa",
      classNameGrid: "items-end",
      name: "addressNumber",
      placeholder: "Digite o número da sua casa",
      type: "number",
    },
  ];

  return (
    <>
      <div className="grid gap-1 text-center">
        <h1 className="text-3xl font-bold">Registro</h1>

        <span className="font-semibold opacity-60">Faça seu cadastro aqui!</span>
      </div>
      <form className="h-full w-full grid grid-cols-inputs-register pt-4" onSubmit={handleSubmit(submit)}>
        {inputs.map((input: InputsProps, index: Key) => (
          <div className={`flex flex-col gap-1 ${input.classNameGrid} justify-start text-black`} key={index}>
            <div className="w-4/5 text-start">
              <span className="font-bold">{input.nameSpan}</span>
            </div>

            <div className="w-4/5 border-2 border-[#00938c] rounded-lg py-1 2xl:py-2 px-3">
              {input.mask ? (
                <InputMask
                  mask={input.mask}
                  maskPlaceholder=""
                  {...register(input.name as keyof SchemaTypeRegister)}
                  placeholder={input.placeholder}
                  className="text-sm 2xl:text-base w-full h-full outline-none border-none"
                />
              ) : (
                <input
                  type={input.type}
                  {...register(input.name as keyof SchemaTypeRegister)}
                  placeholder={input.placeholder}
                  className="text-sm 2xl:text-base w-full h-full outline-none border-none"
                />
              )}
            </div>

            <div className={`w-4/5 flex ${input.classNameGrid} justify-start`}>
              {errors[input.name as keyof SchemaTypeRegister] && (
                <span className="text-red-600">{errors[input.name as keyof SchemaTypeRegister]?.message}</span>
              )}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-1 items-start">
          <div className="w-4/5 text-start">
            <span className="font-bold text-black">Data de Nascimento</span>
          </div>
          <div className="w-4/5 border-2 border-[#00938c] rounded-lg py-1 2xl:py-2 px-3">
            <input
              type="date"
              placeholder="Digite a data de nascimento"
              className="text-sm 2xl:text-base w-full h-full outline-none border-none text-black"
              {...register("dateOfBirth", { required: true })}
            />
          </div>

          {errors.dateOfBirth && <span className="text-red-600">{errors.dateOfBirth.message}</span>}
        </div>

        <div className="w-full h-auto flex flex-col items-end justify-center col-span-2 gap-1">
          <button
            type="submit"
            className="w-full border border-[#00938c] text-[#00938c] py-2 px-6 rounded-lg hover:bg-[#00938c] hover:text-white transition-all"
          >
            Cadastrar-se
          </button>

          <p>
            Já tem conta?
            <span className="cursor-pointer font-bold text-blue-600 hover:text-blue-800" onClick={() => navigate.push(`access?${handleTogglePages("login")}`)}>
              {" "}
              Clique aqui
            </span>
          </p>
        </div>
      </form>

      <Toaster />
    </>
  );

  async function submit(e: SchemaTypeRegister) {
    const { dateOfBirth, ...rest } = e;
    const newDateOfBirth = new Date(dateOfBirth);
    const register: UserRegister = {
      ...rest,
      dateOfBirth: format(newDateOfBirth, "yyyy-MM-dd HH:mm:ss"),
      totalValue: parseFloat(0),
    };

    const aux = await createUser(register);

    if (aux.status) {
      const { ...restUser } = aux.message.user;
      const user: UserProps = {
        ...restUser,
        token: aux.message.token.original.access_token,
      };

      setUser(user);
    }

    toastMessageLogin(aux);

    setTimeout(() => {
      navigate("/adm");
    }, 5000);
  }

  function toastMessageLogin(responseHttp: { status: boolean; message: [] } | AxiosError) {
    let responseMessage: ResponseMessage = {} as ResponseMessage;
    if (responseHttp instanceof AxiosError) responseMessage = responseHttp.response.data as string;

    const toastMessage: { status: "success" | "error"; message: string } = {
      message: !(responseHttp instanceof AxiosError) ? "Cadastro realizado com sucesso!" : responseMessage.message,
      status: !(responseHttp instanceof AxiosError) ? "success" : "error",
    };

    toast[toastMessage.status](toastMessage.message, {
      position: "bottom-left",
      icon: toastMessage.status === "success" ? <CheckCheck size={16} /> : <X size={16} />,
      onAutoClose: () => {},
    });
  }
}
