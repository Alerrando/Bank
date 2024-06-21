import { ResponseMessage } from "@/context/types";
import { UserAttributes } from "@/data/user";
import { AxiosError } from "axios";
import { api } from "../lib/axios";

export async function createUser({ name, email, cpf, password, cep, dateOfBirth, addressNumber }: UserAttributes) {
  const response = await api.post<ResponseMessage | AxiosError>("/users", {
    name,
    email,
    cpf,
    password,
    cep,
    dateOfBirth,
    addressNumber,
  });

  return response.data;
}
