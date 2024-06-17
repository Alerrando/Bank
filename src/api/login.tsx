import { ResponseMessage } from "@/context/types";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

type LoginProps = {
    email: string;
    password: string;
}

export async function login({ email, password }: LoginProps){
    const response = await api.post<ResponseMessage | AxiosError>("/login", {
        email,
        password
    });

    return response.data;
}