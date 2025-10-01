"use client";

import Dark from "@/assets/images/icons/Dark";
import Light from "@/assets/images/icons/Light";
import { useTheme } from "@/context/UseTheme";
import Link from "next/link";

const Header = () => {
  const { dark, toggle } = useTheme();

  return (
    <header className="w-full fixed z-10 flex justify-between px-2 py-3 border-b-[0.5px] border-[#2F2F2F]">
      <Link href="/" className="text-[20px]">
        Asadbek Haydarov
      </Link>
      <ul className="flex gap-1 items-center">
        <Link
          href="#skills"
          className="hover:bg-[#252525] px-[10px] rounded-[5px]"
        >
          Skills
        </Link>
        <Link
          href="#brands"
          className="hover:bg-[#252525] px-[10px] rounded-[5px]"
        >
          Brands
        </Link>
        <Link
          href="#projects"
          className="hover:bg-[#252525] px-[10px] rounded-[5px]"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:bg-[#252525] px-[10px] rounded-[5px]"
        >
          Contact
        </Link>
        <button
          onClick={() => toggle()}
          className="cursor-pointer hover:bg-[#252525] p-[5px] rounded-[12px]"
        >
          {dark ? (
            <Light color={dark ? "#f5f5f5" : "#121212"} />
          ) : (
            <Dark color={dark ? "#f5f5f5" : "#121212"} />
          )}
        </button>
      </ul>
    </header>
  );
};

export default Header;
