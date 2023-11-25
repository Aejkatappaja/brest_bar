import React from "react";
import { EstablishmentLinks } from "./establishments-links";

export const SideNav: React.FC = () => {
  return (
    <div className="z-5 w-[80%] overflow-y-scroll bg-[#201f23] md:w-[492px]">
      <div className="border-b-2 border-[#3d3d3d] px-4 py-4 text-start text-4xl font-bold">
        Trouver le bar qu&apos;il vous faut{" "}
        <span className="bg-gradient-to-r from-[#c213c7] to-[#b063f2] bg-clip-text text-transparent">
          selon votre humeur
        </span>
      </div>
      <div className="border-b-2 border-[#3d3d3d] px-4 py-4 text-start">
        <h2 className="text-2xl font-semibold">Où boire à Brest ?</h2>
        <EstablishmentLinks />
      </div>
    </div>
  );
};

// c213c7
// b063f2
