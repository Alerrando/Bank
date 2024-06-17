import { ResponseMessage } from "@/context/types";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

export async function deposit(value: number){
    const response = await api.post<ResponseMessage | AxiosError>("/deposit", {
        value
    });

    return response.data;
}