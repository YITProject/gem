"use client";
import { create } from "zustand";
// import { persist } from "zustand/middleware";
import { decode } from "jsonwebtoken";
import { User } from "@prisma/client";
export type UserDataSafeType = Partial<Omit<User, "password">>;
const init = (set: any, get: any) => {
  return {
    data: null as UserDataSafeType | null,
    loadFromJWT: (token?: string, autosave: boolean = true) => {
      if (!token) {
        token = localStorage.getItem("TOKEN") as string;
        if (!token) {
          window.location.href = `/login`;
        }
      }
      const data = decode(token);
      if (data) {
        set(() => ({ data }));
      }
      if (autosave) {
        localStorage.setItem("TOKEN", token);
      }
    },
  };
};
export const useUserState = create(
  init,
  // persist(init, {
  //   name: "USER",
  //   getStorage: () => localStorage,
  // }),
);
