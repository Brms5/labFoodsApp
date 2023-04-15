import {
  GlobalContextData,
  GlobalProviderProps,
} from "@/interfaces/contexts/interface";
import { createContext, useState } from "react";

export const GlobalContext = createContext({} as GlobalContextData);

const GlobalProvider = ({ children }: GlobalProviderProps) => {

  const contextValue = {};

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
