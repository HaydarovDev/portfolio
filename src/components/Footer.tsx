import Github from "@/assets/images/icons/Github";
import Instagram from "@/assets/images/icons/Instagram";
import LinkedIn from "@/assets/images/icons/LinkedIn";
import Telegram from "@/assets/images/icons/Telegram";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-5">
      <h1 className="text-2xl mb-4">You can follow me</h1>
      <div>
        <ul className="flex justify-between flex-wrap sm:justify-center md:justify-start gap-4 sm:gap-10">
          <Link
            href="https://github.com/HaydarovDev"
            target="_blank"
            className="flex items-center gap-1"
          >
            <Github size={15} />
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/asadbek-haydarov/"
            className="flex items-center gap-1"
          >
            <LinkedIn />
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/haydarov_dev/"
            className="flex items-center gap-1"
          >
            <Instagram />
            Instagram
          </Link>
          <Link href="" className="flex items-center gap-1">
            <Telegram /> Telegram
          </Link>
        </ul>
        <p className="mt-8 text-center">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
