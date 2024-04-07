import { InputsProps } from "@/app/access/FormLogin";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ZodType } from "zod";
import { SubmitDatasModal } from "..";
import { StoreContext } from "../../../context";

type ModalFormDepositProps = {
  submitInfos?: (data: SubmitDatasModal) => void;
  inputs?: InputsProps[];
  createFormSchema?: ZodType<unknown, unknown, unknown>;
};

export function ModalFormDeposit({ createFormSchema, inputs, submitInfos }: ModalFormDepositProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SubmitDatasModal>({
    resolver: zodResolver(createFormSchema),
  });
  const useStore = useContext(StoreContext);
  const { user } = useStore;

  useEffect(() => {
    setValue("user_cpf", user.cpf);
  }, []);

  return (
    <form className="w-full flex flex-col gap-8 py-2 px-4" onSubmit={handleSubmit(submitInfos)}>
      <div className="w-full flex flex-col gap-3">
        {inputs?.map((input: InputsProps, indexInputs: number) => (
          <div key={input.name} className="w-full flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor={input.name} className="font-bold">
                {input.label}
              </label>
              {input.name === "user_cpf" ? (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="border border-[#999] rounded-lg p-2 outline-none"
                  {...register(input.name)}
                  autoComplete="on"
                  value={user.cpf}
                />
              ) : (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="border border-[#999] rounded-lg p-2 outline-none"
                  {...register(input.name)}
                  autoComplete="on"
                />
              )}
            </div>
            <ErrorMessage
              errors={errors}
              name={input.name}
              render={({ message }) => <span className="text-red-600">{message}</span>}
              key={`error-mensagge-${indexInputs}`}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-end">
        <button
          type="submit"
          className="w-20 flex flex-row items-center justify-center gap-2 py-2 px-4 border border-[#22C55E] text-[#22C55E] cursor-pointer rounded-lg group hover:bg-[#22C55E] transition-colors"
        >
          <span className="text-lg group-hover:text-white">Ok</span>
        </button>
      </div>
    </form>
  );
}
