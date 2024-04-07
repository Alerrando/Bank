import { InputsProps } from "@/app/access/FormLogin";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = {
  input: InputsProps;
  errors: FieldErrors<>;
  register: UseFormRegister<>;
};

export default function Input({ input, errors, register }: InputProps) {
  return (
    <div className={`flex flex-col gap-1 ${input.classNameGrid} justify-start text-black`} key={Math.random}>
      <div className="w-4/5 text-start">
        <span className="font-bold">{input.nameSpan}</span>
      </div>

      <div className="w-full border-2 border-[#00938c] rounded-lg py-1 2xl:py-2 px-3">
        <input type="text" {...register(input.name)} placeholder={input.placeholder} className="w-full outline-none border-none" />
      </div>

      <div className={`w-full flex ${input.classNameGrid} justify-start`}>
        {errors[input.name] && <span className="text-red-600">{errors[input.name]?.message}</span>}
      </div>
    </div>
  );
}
