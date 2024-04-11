export type UserProps = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  total_value: number;
};

const typesInput = ["value", "string", "email", "password", "tel"] as const;

export type InputsProps = {
  nameSpan: string;
  classNameGrid: string;
  placeholder: string;
  name: (typeof typesInput)[number];
  type: string;
  mask?: string;
};

export type CardWalletProps = {
  name: string;
  limit: string;
  numberCard: string;
  gradient: string;
};

export type ResponseMessage = {
  message: string;
};

export const responseMessageValues = {
  message: "",
};
