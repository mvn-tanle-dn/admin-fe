import { createContext, useState } from "react";
import avatarAdmin from "../assets/img/admin.png";

export const adminContext = createContext({});

export function ProviderAuth({ children }) {
  const [adminInfo, setAdminInfo] = useState({
    username: "admin@admin.com",
    password: "Admin@123",
    name: "Admin Nè",
    avatar: avatarAdmin,
    isLoggin: false,
  });
  return (
    <adminContext.Provider value={{ adminInfo, setAdminInfo }}>
      {children}
    </adminContext.Provider>
  );
}
