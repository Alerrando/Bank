"use client";
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
  setUser: () => void;
};

const useProviderStore = () => createStore(
  persist<ContextProps>((set) => ({
    user: ValuesDefault,
    setUser: (user: UserProps) => set({ user }),
  }), {
    name: 'user',
    getStorage: () => localStorage,
  })
);

export const StateContext = createContext<ContextProps>();

export function StateProvider({ children }: { children: React.ReactNode }){
  const store = useRef(useProviderStore()).current;
  return (
    <StateContext.Provider value={store}>
      {children}
    </StateContext.Provider>
  );
};