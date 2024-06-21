"use client";
import { styleToast } from "@/util";
import { CheckCheck, X } from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import { ResponseMessage } from "./types";

export type ContextProps = {
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
  toastMessageLogin: ({ status, message }: ResponseMessage) => void;
};

const valuesContextDefault: ContextProps = {
  setUser: () => {},
  authenticated: false,
  setAuthenticated: () => {},
  toastMessageLogin: () => {},
};

const StateContext = createContext<ContextProps>(valuesContextDefault);
export function StateProvider({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);

  function toastMessageLogin({ status, message }: ResponseMessage) {
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

  return <StateContext.Provider value={{ authenticated, setAuthenticated, toastMessageLogin }}>{children}</StateContext.Provider>;
}

export const useStore = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStore must be used within a StateProvider");
  }
  return context;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isAuth(Component: any, authenticated: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth = authenticated;

  if (!auth) {
    return null;
  }

  return <Component />;
}
