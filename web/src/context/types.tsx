export type UserProps = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  total_value: number;
};

const typesInput = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
] as const;

export type InputsProps = {
  nameSpan: string;
  classNameGrid: string;
  placeholder: string;
  name: string;
  type: (typeof typesInput)[number];
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
