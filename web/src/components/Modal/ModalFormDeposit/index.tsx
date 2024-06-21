import { InputsProps } from "@/context/types";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType } from "zod";
import { SubmitDatasModal } from "..";

type ModalFormDepositProps = {
  submitInfos: (data: SubmitDatasModal) => void;
  inputs: InputsProps[];
  createFormSchema: ZodType<any, any, any>;
};

export function ModalFormDeposit({ createFormSchema, inputs, submitInfos }: ModalFormDepositProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitDatasModal>({
    resolver: zodResolver(createFormSchema),
  });

  return (
    <form className="w-full flex flex-col gap-8 py-2 px-4" onSubmit={handleSubmit(submitInfos)}>
      <div className="w-full flex flex-col gap-3">
        {inputs?.map((input: InputsProps, indexInputs: number) => (
          <div key={input.name} className="w-full flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor={input.name} className="font-bold">
                {input.nameSpan}
              </label>
              {input.name === "cpf" ? (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="border border-[#999] rounded-lg p-2 outline-none"
                  {...register(input.name)}
                  autoComplete="on"
                  value={""}
                />
              ) : (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="border border-[#999] rounded-lg p-2 outline-none"
                  {...register(input.name as keyof SubmitDatasModal)}
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
