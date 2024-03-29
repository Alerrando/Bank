import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { login } from '../../../api';
import { StateContext } from '../../../context';
import { AxiosError } from 'axios';
import { Key, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { CheckCheck, X } from 'lucide-react';
import { ResponseMessage } from '@/context/types';
import { styleToast } from '@/util';

const schema = z.object({
  email: z
    .string()
    .email('Email inválido')
    .max(255, 'O email deve ter no máximo 255 caracteres'),
  password: z
    .string()
    .min(3, 'A cidade deve ter pelo menos 3 caracteres')
    .max(255, 'A cidade deve ter no máximo 255 caracteres'),
});

type SchemaType = z.infer<typeof schema>;

type FormLoginProps = {
  handleTogglePages: (accessNow: string) => void;
};

export type InputsProps = {
  nameSpan: string;
  classNameGrid: string;
  placeholder: string;
  name: keyof SchemaType;
  type: string;
  mask?: string;
};

export function FormLogin({ handleTogglePages }: FormLoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const { setUser } = useContext(StateContext);
  const navigate = useRouter();

  const inputs: InputsProps[] = [
    {
      nameSpan: 'Email',
      classNameGrid: 'items-start',
      name: 'email',
      placeholder: 'Digite seu email',
      type: 'email',
    },
    {
      nameSpan: 'Senha',
      classNameGrid: 'items-start',
      name: 'password',
      placeholder: 'Digite sua senha',
      type: 'password',
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
      <form
        className="h-full w-full flex flex-col gap-8 pt-4"
        onSubmit={handleSubmit(submit)}
      >
        {inputs.map((input: InputsProps, index: Key) => (
          <div
            className={`flex flex-col gap-1 ${input.classNameGrid} justify-start text-black`}
            key={index}
          >
            <div className="w-4/5 text-start">
              <span className="font-bold">{input.nameSpan}</span>
            </div>

            <div className="w-full border-2 border-[#00938c] rounded-lg py-1 2xl:py-2 px-3">
              <input
                type={input.type}
                {...register(input.name)}
                placeholder={input.placeholder}
                className="text-sm 2xl:text-base w-full h-full outline-none border-none"
              />
            </div>

            <div className={`w-full flex ${input.classNameGrid} justify-start`}>
              {errors[input.name] && (
                <span className="text-red-600">
                  {errors[input.name]?.message}
                </span>
              )}
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
              {' '}
              Clique aqui
            </span>
          </p>
        </div>
      </form>
    </>
  );

  async function submit(e: SchemaType) {
    const aux = await login(e);

    if (aux.status) {
      const { created, ...restUser } = aux.message.user;

      setUser(restUser);
    }
    toastMessageLogin(aux);

    setTimeout(() => {
      navigate.push('/adm');
    }, 5000);
  }

  function toastMessageLogin(responseHttp: { status: boolean; message: [] } | AxiosError) {
    let responseMessage: ResponseMessage = {} as ResponseMessage;
    if(responseHttp instanceof AxiosError){
      responseMessage.message =  responseHttp.response !== undefined ? responseHttp.response?.data : "Erro ao buscar dados!";
    }
    
    const toastMessage: { status: "success" | "error"; message: string } = {
      message: !(responseHttp instanceof AxiosError)
        ? 'Login realizado!'
        : responseMessage.message,
      status: !(responseHttp instanceof AxiosError) ? 'success' : 'error',
    };

    toast[toastMessage.status](toastMessage.message, {
      position: 'bottom-left',
      icon: toastMessage.status == "success" ? <CheckCheck size={16} /> : <X  size={16} />,
      className: styleToast[toastMessage.status],
      onAutoClose: () => {}
    });
  }
}
