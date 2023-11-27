'use client';

import React from 'react';
import Image from 'next/image';

interface FilteredCard {
  src: string;
  isClicked: boolean;
  onClick: () => void;
  text: string;
}

export const FilteredCard: React.FC<FilteredCard> = ({
  src,
  text,
  isClicked,
  onClick,
}) => {
  return (
    <div className='flex flex-col gap-2' onClick={onClick}>
      <div
        className={`${
          isClicked
            ? 'bg-gradient-to-b from-[#c213c7]/30 to-[#b063f2]/30 text-transparent shadow-inner shadow-black '
            : 'shadow-md shadow-black'
        }  flex h-full rounded-xl bg-[#2c2c2c] py-2  md:py-8 2xl:justify-center 2xl:py-16`}
      >
        <Image
          src={src}
          height={120}
          width={180}
          alt=''
          className='px-2 md:px-8 2xl:px-12'
        />
      </div>
      <h3
        className={`text-center ${
          isClicked
            ? 'bg-gradient-to-r from-[#c213c7] to-[#b063f2] bg-clip-text text-transparent'
            : ''
        }`}
      >
        {text}
      </h3>
    </div>
  );
};
