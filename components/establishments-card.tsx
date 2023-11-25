'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface EstablishmentsCard {
  src: string;
  query: string;
  isClicked: boolean;
  onClick: () => void;
  text: string;
}

export const EstablishmentsCard: React.FC<EstablishmentsCard> = ({
  src,
  text,
  query,
  isClicked,
  onClick,
}) => {
  return (
    <Link
      href={`?filter=${query}`}
      className={`${isClicked ? 'text-violet-500' : ''} flex flex-col gap-2`}
      onClick={onClick}
    >
      <div className='flex h-full rounded-xl bg-[#2c2c2c] py-8'>
        <Image src={src} height={120} width={180} alt='' className='px-8' />
      </div>
      <h4 className={`text-center ${isClicked ? 'text-purple-600' : ''}`}>
        {text}
      </h4>
    </Link>
  );
};
