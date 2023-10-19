"use client";
import { create } from "zustand";
// import { persist } from "zustand/middleware";
import { decode } from "jsonwebtoken";
import type { User } from "@prisma/client";

export type UserDataSafeType = Partial<Omit<User, "password">>;
const init = (set, get) => {
  const states = {
    data: null as UserDataSafeType | null,
    isLogin: false,
    name() {
      const got = get().data as UserDataSafeType | null;
      if (got) {
        return got.displayName || got.namespace || null;
      }
      return null;
    },
    login(setter: object) {
      set(() => {
        return {
          data: setter,
          isLogin: true,
        };
      });
    },
    logout() {
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
        const data = decode(token) as object | null;
        if (data) {
          states.login(data);
        }
        return data;
      }
      return null;
    },
    loadFromJWT(token?: string, autosave = true) {
      if (!token) {
        token = localStorage.getItem("TOKEN")!;
        if (!token) {
          window.location.href = `/login`;
          return;
        }
      }
      const data = decode(token) as null | object;
      if (data) {
        states.login(data);
      }
      if (autosave) {
        localStorage.setItem("TOKEN", token);
      }
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
