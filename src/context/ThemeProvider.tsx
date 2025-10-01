"use client";

import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{
  dark: boolean;
  toggle: () => void;
} | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const newTheme = !prev;
      document.body.className = newTheme ? "dark" : "light";
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
