import { ResponseMessage } from "@/context/types";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

export type LoginBody = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginBody) {
  const response = await api.post<ResponseMessage | AxiosError>("/login", {
    email,
    password,
  });

  return response.data;
}
