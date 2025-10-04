"use client";

import Dark from "@/assets/images/icons/Dark";
import Light from "@/assets/images/icons/Light";
import { useTheme } from "@/context/UseTheme";
import Link from "next/link";

const Header = () => {
  const { dark, toggle } = useTheme();

  return (
    <header
      className={`w-full fixed ${
        dark ? "bg-[#121212]" : "bg-[#f5f5f5]"
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
              dark ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Home
          </Link>
          <Link
            href="#skills"
            className={`${
              dark ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Skills
          </Link>
          <Link
            href="#brands"
            className={`${
              dark ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Brands
          </Link>
          <Link
            href="#projects"
            className={`${
              dark ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={`${
              dark ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
            } px-[10px] py-[3px] rounded-[5px]`}
          >
            Contact
          </Link>
        </ul>
        <button
          onClick={() => toggle()}
          className={`cursor-pointer ${
            dark ? "hover:bg-[#252525]" : "hover:bg-[#ebebeb]"
          } p-[5px] rounded-[12px]`}
        >
          {dark ? (
            <Light color={dark ? "#f5f5f5" : "#121212"} />
          ) : (
            <Dark color={dark ? "#f5f5f5" : "#121212"} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
