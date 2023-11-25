import Image from "next/image";
import React from "react";
import { BiSupport } from "react-icons/bi";

export const Header: React.FC = () => {
  return (
    <div className="z-10 flex justify-between bg-[#201f23] px-2 py-2 shadow-md shadow-black">
      <Image
        src="/images/brest-bar-logo-1.png"
        width={60}
        height={200}
        alt="bar-brest-logo"
      />
      <div className="flex items-center justify-center pr-4">
        <button className="flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
          <BiSupport />
          Faire une demande
        </button>
      </div>
    </div>
  );
};
