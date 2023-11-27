import React from 'react';
import Image from 'next/image';

interface CardImageProps {
  src: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src }) => {
  return (
    <Image
      src={src}
      height={120}
      width={180}
      alt=''
      className='px-2 md:px-8 2xl:px-12'
    />
  );
};
