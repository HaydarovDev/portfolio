"use client";

import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{
  dark: boolean;
  toggle: () => void;
} | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark = storedTheme === "dark" || (!storedTheme && prefersDark);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      if (prev === null) return prev;
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  if (dark === null) return null;

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
