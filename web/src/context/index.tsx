"use client";
import { useSearchParams } from 'next/navigation';
import { createContext, useRef } from 'react';
import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProps } from './types';


const ValuesDefault: UserProps = {
  id: '',
  name: '',
  cpf: '',
  email: '',
  total_value: 0,
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
    skipHydration: true,
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