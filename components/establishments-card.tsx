import React from "react";
import Image from "next/image";

interface EstablishmentsCardProps {
  src: string;
  text: string;
}

export const EstablishmentsCard: React.FC<EstablishmentsCardProps> = ({
  src,
  text,
}) => {
  console.log(src);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-full rounded-xl bg-[#2c2c2c] py-8">
        <Image src={src} height={120} width={180} alt="" className="px-8" />
      </div>
      <h4 className="text-center">{text}</h4>
    </div>
  );
};
