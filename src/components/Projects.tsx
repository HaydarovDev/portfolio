"use client";

import React from "react";
import { MyButton } from "./Skills";
import diveSea from "@/assets/images/divesea.png";
import Image from "next/image";
import Bitcoin from "@/assets/images/icons/Bitcoin";
import { useTheme } from "@/context/UseTheme";

const Projects = () => {
  const { dark } = useTheme();

  return (
    <article
      className="w-full py-14 border-b-[0.5px] border-[#2F2F2F]"
      id="projects"
    >
      <header>
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <MyButton
          sx={{
            borderBottom: dark ? "0.5px solid white" : "0.5px solid black",
            color: dark ? "white" : "black",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#262626",
              color: "white",
            },
          }}
        >
          In progress
        </MyButton>
      </header>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className={`${dark ? "darkShadow" : "shadow-md"}`}>
          <Image src={diveSea} alt="" loading="lazy" />
          <div className={`p-2 ${dark ? "bg-[#262626]" : ""}`}>
            <h1 className="text-[18px] flex items-center gap-2">
              <Bitcoin /> Nft market
            </h1>
            <p className="my-3">The Most Necessary Web Site For Traders</p>
            <div className="flex gap-1">
              <p
                className={`px-2 rounded duration-100 ${
                  dark ? "bg-[#373737]" : "bg-[#eae9e9]"
                }`}
              >
                React
              </p>
              <p
                className={`px-2 rounded duration-100 ${
                  dark ? "bg-[#373737]" : "bg-[#eae9e9]"
                }`}
              >
                Css
              </p>
              <p
                className={`px-2 rounded duration-100 ${
                  dark ? "bg-[#373737]" : "bg-[#eae9e9]"
                }`}
              >
                Typescript
              </p>
            </div>
          </div>
        </div>
        <div className={`${dark ? "darkShadow" : "shadow-md"}`}>
          <Image src={diveSea} alt="" loading="lazy" />
          <div className={`p-2 ${dark ? "bg-[#262626]" : ""}`}>
            <h1 className="text-[18px] flex items-center gap-2">
              <Bitcoin /> Nft market
            </h1>
            <p className="my-3">The Most Necessary Web Site For Traders</p>
            <div className="flex gap-1">
              <p
                className={`px-2 rounded duration-100 ${
                  dark ? "bg-[#373737]" : "bg-[#eae9e9]"
                }`}
              >
                React
              </p>
              <p
                className={`px-2 rounded duration-100 ${
                  dark ? "bg-[#373737]" : "bg-[#eae9e9]"
                }`}
              >
                Css
              </p>
              <p
                className={`px-2 rounded duration-100 ${
                  dark ? "bg-[#373737]" : "bg-[#eae9e9]"
                }`}
              >
                Typescript
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;
