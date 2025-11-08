"use client";

import { useTheme } from "next-themes";
import Dark from "@/assets/images/icons/Dark";
import Light from "@/assets/images/icons/Light";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header
      className={`w-full fixed ${
        theme === "light" ? "bg-[#f5f5f5]" : "bg-[#121212]"
      } z-10 flex justify-between px-2 py-3 border-b-[0.5px] border-[#2F2F2F]`}
      id="header"
    >
      <Link href="/" className="text-[20px]">
        Asadbek Haydarov
      </Link>
      <div className="flex gap-1 items-center">
        <ul className="hidden md:flex">
          <Link
            href="#header"
            className={`${
              theme === "dark" ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Home
          </Link>
          <Link
            href="#skills"
            className={`${
              theme === "dark" ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Skills
          </Link>
          <Link
            href="#brands"
            className={`${
              theme === "dark" ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Brands
          </Link>
          <Link
            href="#projects"
            className={`${
              theme === "dark" ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={`${
              theme === "dark" ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Contact
          </Link>
        </ul>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`cursor-pointer ${
            theme === "dark" ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
          } p-[5px] rounded-[12px]`}
        >
          {theme ? (
            <Light color={theme === "dark" ? "#f5f5f5" : "#121212"} />
          ) : (
            <Dark color={theme === "dark" ? "#f5f5f5" : "#121212"} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
