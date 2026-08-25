import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "paper" | "dark";

type ThemeContextValue = {
  theme: Theme;
  cycle: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  cycle: () => {},
  setTheme: () => {},
});

const STORAGE_KEY = "politarca-theme-v3";
const ORDER: Theme[] = ["light", "paper", "dark"];

function apply(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const color = theme === "dark" ? "#111111" : theme === "paper" ? "#f3ead8" : "#ffffff";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", color);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const next: Theme = saved === "light" || saved === "paper" || saved === "dark" ? saved : "light";
    setThemeState(next);
    apply(next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    apply(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const cycle = useCallback(() => {
    setThemeState((prev) => {
      const next = ORDER[(ORDER.indexOf(prev) + 1) % ORDER.length] ?? "light";
      apply(next);
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, cycle, setTheme }), [theme, cycle, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function themeLabel(theme: Theme) {
  if (theme === "paper") return "Papel";
  if (theme === "dark") return "Oscuro";
  return "Claro";
}

export function nextThemeLabel(theme: Theme) {
  if (theme === "light") return "Pasar a papel";
  if (theme === "paper") return "Pasar a oscuro";
  return "Pasar a claro";
}
