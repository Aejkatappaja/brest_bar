import React from 'react';
import Image from 'next/image';

export const Logo: React.FC = () => {
  return (
    <Image
      src='/images/brest-bar-logo-1.png'
      width={60}
      height={200}
      alt='bar-brest-logo'
      className='animate-pulse duration-300 hover:translate-y-1 hover:rotate-12'
    />
  );
};
