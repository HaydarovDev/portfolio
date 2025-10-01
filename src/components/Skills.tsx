"use client";
import React from "react";
import { useState } from "react";
import Vite from "@/assets/images/icons/Vite";
import Sass from "@/assets/images/icons/Sass";
import Figma from "@/assets/images/icons/Figma";
import ReactIcon from "@/assets/images/icons/ReactIcon";
import NextLogo from "@/assets/images/icons/NextLogo";
import Tailwind from "@/assets/images/icons/Tailwind";
import Github from "@/assets/images/icons/Github";
import Javascript from "@/assets/images/icons/Javascript";
import Typescript from "@/assets/images/icons/Typescript";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import MaterialIU from "./MaterialUI";

export const MyButton = styled(Button)({
  padding: "8px 10px",
  borderRadius: "3px 3px 0 0",
  "&:hover": {
    backgroundColor: "#2F2F2F",
  },
});

const Skills = () => {
  const tabs = ["Expertise", "Software", "Language"];
  const [activeTab, setActiveTab] = useState("Expertise");
  return (
    <section
      className="w-full py-10 border-b-[0.5px] border-[#2F2F2F]"
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex gap-2 border-b border-[#2F2F2F] mb-6">
        {tabs.map((tab) => (
          <MyButton
            key={tab}
            onClick={() => setActiveTab(tab)}
            sx={{
              borderBottom:
                activeTab === tab
                  ? "0.5px solid white"
                  : "2px solid transparent",
              color: activeTab === tab ? "white" : "gray",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#262626",
              },
            }}
          >
            {tab}
          </MyButton>
        ))}
      </div>

      {activeTab === "Expertise" && (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            Frontend Development
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            Responsive Web Design
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            UI/UX Design
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            Performance Optimization
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            Version Control
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            Reusable Components
          </div>
        </div>
      )}

      {activeTab === "Software" && (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <Vite />
            Vite
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <Sass />
            Sass / SCSS
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <Figma />
            Figma
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <ReactIcon />
            React JS
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <NextLogo />
            Next JS
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <Tailwind />
            Tailwind
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <MaterialIU />
            Material UI
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <Github size={22} />
            Git & GitHub
          </div>
        </div>
      )}

      {activeTab === "Language" && (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <Javascript />
            Javascript
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            <Typescript />
            Typescript
          </div>
          <div className="p-2 bg-[#262626] rounded flex items-center gap-2">
            English
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
