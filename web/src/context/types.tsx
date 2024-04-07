export type UserProps = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  total_value: number;
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
