import { InputsProps, ResponseMessage } from "@/context/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Key } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useStore } from "../../../context";
import { login } from "@/api/login";

const schema = z.object({
  email: z.string().email("Email invalid!").max(255, "The email must have a maximum of 255 characters"),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});

type SchemaType = z.infer<typeof schema>;

type FormLoginProps = {
  handleTogglePages: (accessNow: string) => void;
};

export function FormLogin({ handleTogglePages }: FormLoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const { setAuthenticated, setUser, toastMessageLogin } = useStore();
  const navigate = useRouter();

  const inputs: InputsProps[] = [
    {
      nameSpan: "Email",
      classNameGrid: "items-start",
      name: "email",
      placeholder: "Digite seu email",
      type: "email",
    },
    {
      nameSpan: "Senha",
      classNameGrid: "items-start",
      name: "password",
      placeholder: "Digite sua senha",
      type: "password",
    },
  ];

  return (
    <>
      <div className="grid gap-1 text-center">
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>

        <span className="font-semibold opacity-60">Faça Login</span>
      </div>
      <form className="h-full w-full flex flex-col gap-8 pt-4" onSubmit={handleSubmit(submit)}>
        {inputs.map((input: InputsProps, index: Key) => (
          <div className={`flex flex-col gap-1 ${input.classNameGrid} justify-start text-black`} key={index}>
            <div className="w-4/5 text-start">
              <span className="font-bold">{input.nameSpan}</span>
            </div>

            <div className="w-full border-2 border-[#00938c] rounded-lg py-1 2xl:py-2 px-3">
              <input
                type={input.type}
                {...register(input.name as keyof SchemaType)}
                placeholder={input.placeholder}
                className="text-sm 2xl:text-base w-full h-full outline-none border-none"
              />
            </div>

            <div className={`w-full flex ${input.classNameGrid} justify-start`}>
              {errors[input.name as keyof SchemaType] && <span className="text-red-600">{errors[input.name as keyof SchemaType]?.message}</span>}
            </div>
          </div>
        ))}

        <div className="w-full h-auto flex flex-col items-end justify-center col-span-2 gap-1 mx-auto">
          <button
            type="submit"
            className="w-full border border-[#00938c] text-[#00938c] py-2 px-8 rounded-lg hover:bg-[#00938c] hover:text-white transition-all"
          >
            Entrar
          </button>

          <p>
            Não tem conta?
            <span
              className="cursor-pointer font-bold text-blue-600 hover:text-blue-800"
              onClick={() => navigate.push(`access?${handleTogglePages("register")}`)}
            >
              {" "}
              Clique aqui
            </span>
          </p>
        </div>
      </form>
    </>
  );

  async function submit(e: SchemaType) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const aux: any | AxiosError = await login(e);

    if (aux.status) {
      const { ...restUser } = aux.message.user;

      setUser(restUser);
    }

    toastMessageLogin(verifyError(e));
    setAuthenticated(true);

    setTimeout(() => {
      navigate.push("/adm");
    }, 5000);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function verifyError(e: any | AxiosError): ResponseMessage {
    if (!(e instanceof AxiosError)) {
      return {
        message: "Não foi possivel fazer o login",
        status: false,
      };
    }

    return {
      message: e.response?.data.message,
      status: e.response?.data.status,
    };
  }
}
