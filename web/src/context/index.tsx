"use client";
import { useSearchParams } from 'next/navigation';
import { createContext, useRef } from 'react';
import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';

type UserProps = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  total_value: number;
  token: string;
};

const ValuesDefault: UserProps = {
  id: '',
  name: '',
  cpf: '',
  email: '',
  total_value: 0,
  token: '',
};

export type ContextProps = {
  user: UserProps;
  setUser: (user: UserProps) => void;
};

const valuesContextDefault: ContextProps = {
  user: ValuesDefault,
  setUser: (user: UserProps) => {},
}

const useProviderStore = () => createStore(
  persist<ContextProps>((set) => ({
    user: ValuesDefault,
    setUser: (user: UserProps) => set({ user }),
  }), {
    name: 'user',
    getStorage: () => localStorage,
  })
);

export const StateContext = createContext<ContextProps>(valuesContextDefault);

export function StateProvider({ children }: { children: React.ReactNode }){
  const { getState } = useRef(useProviderStore()).current;

  return (
    <StateContext.Provider value={getState()}>
      {children}
    </StateContext.Provider>
  );
};

export function redirectPage(redirect: string){
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString())
  params.set("page", redirect);
  return params.toString();
}