import Image from 'next/image';
import React from 'react';
import { ContactButton } from './buttons';

export const Header: React.FC = () => {
  return (
    <nav className='bg-grey shadow-3d fixed z-10 flex w-screen justify-between px-2 py-2'>
      <Image
        src='/images/brest-bar-logo-1.png'
        width={60}
        height={200}
        alt='bar-brest-logo'
        className='animate-pulse duration-300 hover:translate-y-1 hover:rotate-12'
      />
      <ContactButton />
    </nav>
  );
};
