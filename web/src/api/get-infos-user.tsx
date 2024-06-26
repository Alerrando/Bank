import { api } from "@/lib/axios";

export async function getInfosUser(cpf: string) {
  const response = await api.post("/by-cpf", {
    cpf,
  });

  return response.data;
}
