import { createContext, useState } from "react";

export const adminContext = createContext({});

export function ProviderAuth({ children }) {
  const [adminInfo, setAdminInfo] = useState({});
  return (
    <adminContext.Provider value={{ adminInfo, setAdminInfo }}>
      {children}
    </adminContext.Provider>
  );
}
