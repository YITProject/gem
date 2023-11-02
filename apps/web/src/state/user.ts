"use client";
import { create } from "zustand";
// import { persist } from "zustand/middleware";
import { decode } from "jsonwebtoken";
import type { User } from "@prisma/client";

export type UserData = User;
const init = (set, get) => {
  const states = {
    data: null as UserData | null,
    isLogin: false,
    name() {
      const got = get().data as UserData | null;
      if (got) {
        return got.displayName || got.namespace || null;
      }
      return null;
    },

    // 登录, 并保存arg0到状态, 设置isLogin为true
    login(arg0: UserData) {
      set(() => {
        return {
          data: arg0,
          isLogin: true,
        };
      });
    },

    // 登出
    logout() {
      localStorage.removeItem("TOKEN");
      set(() => {
        return {
          data: null,
          isLogin: false,
        };
      });
    },

    load() {
      const token = localStorage.getItem("TOKEN");
      if (token) {
        const data = decode(token) as null | User;
        if (data) {
          states.login(data);
        }
        return data;
      }
      return null;
    },
    loadJWT(token: string, autosave = true) {
      const data = decode(token) as null | User;
      if (data) {
        states.login(data);
      }
      if (autosave) {
        localStorage.setItem("TOKEN", token);
      }
    },
    getToken() {
      return localStorage.getItem("TOKEN");
    },
  };
  return states;
};
export const useUserState = create(
  init,
  // persist(init, {
  //   name: "USER",
  //   getStorage: () => localStorage,
  // }),
);

export default useUserState;
