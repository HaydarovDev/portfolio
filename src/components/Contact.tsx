import React from "react";
import Link from "next/link";
import Globe from "@/assets/images/icons/Globe";
import Location from "@/assets/images/icons/Location";
import Phone from "@/assets/images/icons/Phone";
import Email from "@/assets/images/icons/Email";

const Contact = () => {
  return (
    <article
      className="w-full py-10 border-b-[0.5px] border-[#2F2F2F]"
      id="contact"
    >
      <header>
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
      </header>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Link
            className="p-3 border border-[#262626] rounded flex items-center gap-2"
            target="_blank"
            href="https://www.google.com/maps/place/%D0%9D%D0%B0%D0%B2%D0%BE%D0%B8,+%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@40.098723,65.3693031,10659m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3f51c6d7e12931b3:0x613f6eb9636019bb!8m2!3d40.0974346!4d65.3524598!16zL20vMDQ2aGds?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
          >
            <Location />
            Uzbekistan Navoi
          </Link>
          <Link
            href="#"
            className="p-3 border border-[#262626] rounded flex items-center gap-2"
          >
            <Globe />
            haydarov-asadbek.com
          </Link>
          <Link
            href="tel:990622943"
            className="p-3 border border-[#262626] rounded flex items-center gap-2"
          >
            <Phone />
            +998-99-062-29-43
          </Link>
          <Link
            href="https://asadbek.haydarov.code@gmail.com"
            className="p-3 border border-[#262626] rounded flex items-center gap-2"
          >
            <Email />
            asadbek.haydarov.code@gmail.com
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Contact;
