"use client";
import { useEffect } from "react";

type ThemeType = "light" | "dark";
const key = "THEME";
export function changeTheme(theme?: ThemeType) {
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(key, theme);
    return;
  }
  const saved = localStorage.getItem(key) as ThemeType | null;
  if (saved) {
    changeTheme(saved);
    return;
  }
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  changeTheme(isDark ? "dark" : "light");
}
export function SetTheme(theme?: ThemeType) {
  useEffect(() => {
    changeTheme(theme);
  }, [theme]);
}
