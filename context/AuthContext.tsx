"use client";
import { api } from "@/lib/api";
import { createContext, useContext, useState } from "react";

type User = {
  username: string;
  realName: string;
};

interface AuthContextProps {
  user: User | null;
  isLoggedIn: boolean;
  signIn: (username: string, password: string) => Promise<boolean>;
  signUp: (username: string, password: string, realName: string) => void;
  signOut: () => void;
  test: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoggedIn: false,
  signIn: async (username: string, password: string) => true,
  signUp: (username: string, password: string, realName: string) => {},
  signOut: () => {},
  test: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = async (username: string, password: string) => {
    const result = await api.post("/accounts/sign-in", { username, password });

    if (result.status != 200) throw "대충 로그인 중 오류발생";

    setIsLoggedIn(true);
    setUser({
      username: result.data.username,
      realName: result.data.realName,
    });
    localStorage.setItem("access_token", result.data.accessToken);

    console.log(result);

    return true;
  };

  const signOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const signUp = async (
    username: string,
    password: string,
    realName: string
  ) => {
    const result = await api.post("/accounts/sign-up", {
      username,
      password,
      realName,
    });

    if (result.status != 200) throw "대충 회원가입 중 오류 발생";

    setUser({
      username: result.data.username,
      realName: result.data.realName,
    });
    setIsLoggedIn(true);
    localStorage.setItem("access_token", result.data.accessToken);
  };

  const test = () => {
    setIsLoggedIn(true);
    setUser({
      username: "hyunsuk97",
      realName: "테스트",
    });
  };

  const value = { signIn, signUp, signOut, user, isLoggedIn, test };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
