"use client";
import { styleToast } from "@/util";
import { CheckCheck, X } from "lucide-react";
import React, { createContext, useRef } from "react";
import { toast } from "sonner";
import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import { ResponseMessage, UserProps } from "./types";

const ValuesDefault: UserProps = {
  id: "",
  name: "",
  cpf: "",
  email: "",
  total_value: 0,
};

export type ContextProps = {
  user: UserProps;
  setUser: (user: UserProps) => void;
};

const valuesContextDefault: ContextProps = {
  user: ValuesDefault,
  setUser: () => {},
};

const useProviderStore = () =>
  createStore(
    persist<ContextProps>(
      (set) => ({
        user: ValuesDefault,
        setUser: (user: UserProps) => set({ user }),
      }),
      {
        name: "user",
        skipHydration: true,
      },
    ),
  );

export const StateContext = createContext<ContextProps>(valuesContextDefault);

export function StateProvider({ children }: { children: React.ReactNode }) {
  const { getState } = useRef(useProviderStore()).current;

  return <StateContext.Provider value={getState()}>{children}</StateContext.Provider>;
}

export function toastMessageLogin({ status, message }: ResponseMessage) {
  const toastMessage: { status: "success" | "error"; message: string } = {
    message,
    status: status ? "success" : "error",
  };

  toast[toastMessage.status](toastMessage.message, {
    position: "bottom-left",
    icon: toastMessage.status === "success" ? <CheckCheck size={16} /> : <X size={16} />,
    className: styleToast[toastMessage.status],
    onAutoClose: () => {},
  });
}
