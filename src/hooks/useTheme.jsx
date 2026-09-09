import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const hasManualChoice = localStorage.getItem(STORAGE_KEY);
      if (!hasManualChoice) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}