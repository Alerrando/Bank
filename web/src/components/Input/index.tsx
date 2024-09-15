import { InputsModel } from "@/models/InputsModel";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = {
  input: InputsModel;
  errors: FieldErrors<any>;
  register: UseFormRegister<any>;
};

export default function Input({ input, errors, register }: InputProps) {
  return (
    <div className={`w-full flex flex-col ${input.classNameGrid} justify-center text-black`}>
      <div className="w-4/5 text-start">
        <span className="font-bold">{input.nameSpan}</span>
      </div>

      <div className="w-full border-2 border-[#00938c] rounded-lg py-1 2xl:py-2 px-3">
        <input type="text" {...register(input.name)} placeholder={input.placeholder} className="w-full outline-none border-none" autoComplete="off" />
      </div>

      <div className={`w-full flex ${input.classNameGrid} justify-start`}>
        {errors[input.name] && <span className="text-red-600">{String(errors[input.name]?.message)}</span>}
      </div>
    </div>
  );
}
