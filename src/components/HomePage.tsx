import Code from "@/assets/images/icons/Code";
import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/avatar.jpg";

const HomePage = () => {
  return (
    <article className="w-full min-h-[80vh] flex flex-col justify-center border-b-[0.5px] border-[#2F2F2F]">
      <Code size={50} />
      <h1 className="my-4 text-3xl font-bold uppercase">Asadbek Haydarov</h1>
      <div className="flex items-center gap-10">
        <div>
          <h1 className="my-2 text-2xl font-semibold">Front Developer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur nisi quis ratione nesciunt voluptatum asperiores quos
            quibusdam suscipit. Aspernatur, suscipit.
          </p>
          <p className="mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quasi!
            Ipsum nihil debitis sequi corrupti fugiat
          </p>
        </div>
        <Image
          loading="lazy"
          src={avatar}
          className="rounded"
          width={200}
          height={200}
          alt="avatar 404"
          priority={false}
        />
      </div>
    </article>
  );
};

export default HomePage;
