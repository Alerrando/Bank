import { IoMdClose } from "react-icons/io";
import { ZodType } from "zod";
import { ModalFormDeposit } from "./ModalFormDeposit";
import { SchemaDepositDataType } from "@/app/adm/deposit/TabCopyPaste";
import { SchemaTransferDataType } from "@/app/adm/transfer/page";
import { InputsModel } from "@/models/InputsModel";

export type SubmitDatasModal = SchemaDepositDataType | SchemaTransferDataType;

type ModalProps = {
  setModal: () => void;
  submitInfos: (data: SubmitDatasModal) => void;
  title: string;
  inputs: InputsModel[];
  createFormSchema: ZodType<any, any, any>;
  modalName: string;
};

export function Modal({ setModal, modalName, title, createFormSchema, inputs, submitInfos }: ModalProps) {
  return (
    <div className="w-screen h-auto flex items-center justify-center bg-modal fixed inset-0 z-[101]">
      <div className="w-auto sm:w-[65%] max-h-[75%] sm:h-auto p-3 bg-white rounded-md overflow-y-auto">
        <header className="min-w-full h-auto flex flex-col gap-2 p-2 after:block after:border-b after:border-[#999]">
          <div className="w-full flex flex-row items-center justify-between">
            <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
            <IoMdClose size={32} className="cursor-pointer" onClick={() => setModal()} />
          </div>
        </header>

        {modalName === "deposit" ? <ModalFormDeposit createFormSchema={createFormSchema} inputs={inputs} submitInfos={submitInfos} /> : <></>}
      </div>
    </div>
  );
}
