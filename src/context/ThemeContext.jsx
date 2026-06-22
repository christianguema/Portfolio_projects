import { createContext, useContext } from "react";
import { useTheme as useThemeHook } from "@/hooks/useTheme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const theme = useThemeHook();
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit être utilisé dans ThemeProvider");
  }
  return context;
}