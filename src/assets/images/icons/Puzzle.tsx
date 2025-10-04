"use client";
import { useTheme } from "@/context/UseTheme";
import React from "react";

const Puzzle = () => {
  const { dark } = useTheme();
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={dark ? "#D3D3D3" : "#1f1f1f"}
      strokeWidth="3"
    >
      <path d="M48 28V12H36c0 2.21 4 8-4 8s-4-5.79-4-8H16v16c-2.21 0-8-4-8 4s5.79 4 8 4v16h12c0-2.21-4-8 4-8s4 5.79 4 8h12V36c2.21 0 8 4 8-4s-5.79-4-8-4z" />
    </svg>
  );
};

export default Puzzle;
