import { AxiosResponse } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "features/api";

import { User } from "../types";

export const USER_STORAGE_KEY = "@user_storage_key";

interface UserContextData {
  user?: User | null;
  setUser: (u: User | null) => void;
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
  const [user, setUser] = useState<User | null>();

  const login = async (email: string, password: string) =>
    await API.post<{ token: string }>("login/", {
      email,
      password,
    });

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
  };

  useEffect(() => {
    (async () => {
      if (user) return;

      const userFromStorage = await AsyncStorage.getItem(USER_STORAGE_KEY);

      if (!userFromStorage) return;

      setUser(JSON.parse(userFromStorage));
    })();
  }, []);

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
