import Image from "next/image";
import React from "react";
import { EstablishmentsCard } from "./establishments-card";

interface EstablishmentTypeCardProps {}

export const EstablishmentLinks: React.FC<
  EstablishmentTypeCardProps
> = ({}) => {
  const establishments = [
    { image: "/images/cave.png", text: "Cave" },
    { image: "/images/brewery.png", text: "Brasserie" },
    { image: "/images/bar.png", text: "Bar" },
  ];
  return (
    <div className="grid grid-cols-3 gap-5 pt-6 font-semibold">
      {establishments.map((item) => {
        const { image, text } = item;
        return <EstablishmentsCard key={image} src={image} text={text} />;
      })}
    </div>
  );
};
