type ThemeType = "light" | "dark";
const key = "THEME";
export function SetTheme(theme?: ThemeType) {
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(key, theme);
    return;
  }
  const saved = localStorage.getItem(key) as ThemeType | null;
  if (saved) {
    SetTheme(saved);
    return;
  }
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  SetTheme(isDark ? "dark" : "light");
}
