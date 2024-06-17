import { ResponseMessage } from "@/context/types";
import { api } from "../lib/axios";
import { AxiosError } from "axios";

type CreateUserProps = {
    name: string;
    email: string;
    cpf: string;
    password: string;
    cep: string;
    dateOfBirth: string;
    addressNumber: number;
}

export async function createUser({ name, email, cpf, password, cep, dateOfBirth, addressNumber }: CreateUserProps){
    const response = await api.post<ResponseMessage | AxiosError>("/users", {
        name,
        email,
        cpf,
        password,
        cep,
        dateOfBirth,
        addressNumber,
    })

    return response.data;
}