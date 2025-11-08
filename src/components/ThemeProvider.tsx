"use client";

import React, { ReactNode, useEffect, useState } from "react";

import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <NextThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
