import ItPark from "@/assets/images/icons/ItPark";
import React from "react";

const Brands = () => {
  return (
    <article
      className="w-full py-14 border-b-[0.5px] border-[#2F2F2F]"
      id="brands"
    >
      <header>
        <h1 className="text-3xl font-bold mb-6">Clients</h1>
      </header>
      <div className="flex justify-center">
        <ItPark />
      </div>
    </article>
  );
};

export default Brands;
