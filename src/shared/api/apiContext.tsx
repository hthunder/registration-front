import { ApiClient } from "./apiClient.ts";
import React, { useContext } from "react";

const ApiContext = React.createContext<ApiClient | null>(null);
const apiClient = new ApiClient("http://localhost:8080/api");

export const ApiProvider = (props: { children: React.ReactNode }) => {
  return (
    <ApiContext.Provider value={apiClient}>
      {props.children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("useApiContext должен использовать внутри ApiProvider");
  }

  return context;
};
