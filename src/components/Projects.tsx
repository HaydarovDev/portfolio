"use client";

import React from "react";
import { MyButton } from "./Skills";
import diveSea from "@/assets/images/divesea.png";
import Image from "next/image";
import Bitcoin from "@/assets/images/icons/Bitcoin";

const Projects = () => {
  return (
    <article
      className="w-full py-10 border-b-[0.5px] border-[#2F2F2F]"
      id="projects"
    >
      <header>
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <MyButton
          sx={{
            borderBottom: "0.5px solid white",
            color: "white",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#262626",
            },
          }}
        >
          In progress
        </MyButton>
      </header>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="cardShadow">
          <Image src={diveSea} alt="" loading="lazy" />
          <div className="bg-[#262626] p-2">
            <h1 className="text-[18px] flex items-center gap-2">
              <Bitcoin /> Nft market
            </h1>
            <p className="my-3">The Most Necessary Web Site For Traders</p>
            <div className="flex gap-1">
              <p className="px-2 rounded bg-[#373737]">React</p>
              <p className="px-2 rounded bg-[#373737]">Css</p>
              <p className="px-2 rounded bg-[#373737]">Typescript</p>
            </div>
          </div>
        </div>
        <div className="cardShadow">
          <Image src={diveSea} alt="" loading="lazy" />
          <div className="bg-[#262626] p-2">
            <h1 className="text-[18px] flex items-center gap-2">
              <Bitcoin /> Nft market
            </h1>
            <p className="my-3">The Most Necessary Web Site For Traders</p>
            <div className="flex gap-1">
              <p className="px-2 rounded bg-[#373737]">React</p>
              <p className="px-2 rounded bg-[#373737]">Css</p>
              <p className="px-2 rounded bg-[#373737]">Typescript</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;
