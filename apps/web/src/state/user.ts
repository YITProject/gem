"use client";
import { create } from "zustand";
// import { persist } from "zustand/middleware";
import { decode } from "jsonwebtoken";
import type { User } from "@prisma/client";

export type UserDataSafeType = Partial<Omit<User, "password">>;
const init = (set) => {
  return {
    data: null as UserDataSafeType | null,
    loadFromJWT: (token?: string, autosave = true) => {
      if (!token) {
        token = localStorage.getItem("TOKEN")!;
        if (!token) {
          window.location.href = `/login`;
          return;
        }
      }
      const data = decode(token);
      if (data) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
