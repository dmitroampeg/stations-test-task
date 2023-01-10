import { AxiosResponse } from "axios";
import React, { createContext, useContext, useState } from "react";

import API from "features/api";

import { User } from "../types";

interface UserContextData {
  user?: User;
  setUser: (u: User) => void;
  login: (
    email: string,
    password: string
  ) => Promise<AxiosResponse<{ token: string }>>;
  logout: () => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>();

  const login = async (email: string, password: string) =>
    await API.post<{ token: string }>("login/", {
      email,
      password,
    });

  const logout = async () => await API.post("logout/");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useUser(): UserContextData {
  return useContext(UserContext);
}
