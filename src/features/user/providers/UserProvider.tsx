import { AxiosResponse } from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import uuid from "react-native-uuid";

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
  ) => Promise<AxiosResponse<{ token: string; id: string }>>;
  logout: () => void;
  updateUser: (id: string, user: Partial<User>) => Promise<AxiosResponse<void>>;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>();

  const login = useCallback(
    async (email: string, password: string) =>
      await API.post<{ token: string; id: string }>("login/", {
        email,
        password,
        id: uuid.v4(),
      }),
    []
  );

  const logout = useCallback(async () => {
    setUser(null);
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
  }, []);

  const updateUser = useCallback(
    async (id: string, updatedUser: Partial<User>) =>
      await API.patch(`login/${id}`, {
        updatedUser,
      }),
    []
  );

  useEffect(() => {
    (async () => {
      if (user) return;

      const userFromStorage = await AsyncStorage.getItem(USER_STORAGE_KEY);

      if (!userFromStorage) return;

      setUser(JSON.parse(userFromStorage));
    })();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useUser(): UserContextData {
  return useContext(UserContext);
}
