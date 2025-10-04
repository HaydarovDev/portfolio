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
import { useTheme } from "@/context/UseTheme";
import Laptop from "@/assets/images/icons/Laptop";
import Responsive from "@/assets/images/icons/Responsive";
import Color from "@/assets/images/icons/Color";
import Flash from "@/assets/images/icons/Flash";
import VersionControl from "@/assets/images/icons/VersionControl";
import Puzzle from "@/assets/images/icons/Puzzle";

export const MyButton = styled(Button)({
  padding: "8px 10px",
  borderRadius: "3px 3px 0 0",
  "&:hover": {
    backgroundColor: "#2F2F2F",
  },
});

const Skills = () => {
  const { dark } = useTheme();
  const tabs = ["Expertise", "Software", "Language"];
  const [activeTab, setActiveTab] = useState("Expertise");
  return (
    <section
      className="w-full py-14 border-b-[0.5px] border-[#2F2F2F]"
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <MyButton
            key={tab}
            onClick={() => setActiveTab(tab)}
            sx={{
              borderBottom:
                activeTab === tab
                  ? dark
                    ? "0.5px solid white"
                    : "0.5px solid black"
                  : "2px solid transparent",
              color: activeTab === tab ? (dark ? "white" : "black") : "gray",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#262626",
                color: "white",
              },
            }}
          >
            {tab}
          </MyButton>
        ))}
      </div>

      {activeTab === "Expertise" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Laptop />
            Frontend Development
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Responsive />
            Responsive Web Design
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Color />
            UI/UX Design
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Flash />
            Performance Optimization
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <VersionControl />
            Version Control
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Puzzle />
            Reusable Components
          </div>
        </div>
      )}

      {activeTab === "Software" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Vite />
            Vite
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Sass />
            Sass / SCSS
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Figma />
            Figma
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <ReactIcon />
            React JS
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <NextLogo />
            Next JS
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Tailwind />
            Tailwind
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <MaterialIU />
            Material UI
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Github size={22} />
            Git & GitHub
          </div>
        </div>
      )}

      {activeTab === "Language" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Javascript />
            Javascript
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            <Typescript />
            Typescript
          </div>
          <div
            className={`p-2 ${
              dark ? "bg-[#262626]" : "skillsShadow"
            } rounded flex items-center gap-2`}
          >
            English
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
