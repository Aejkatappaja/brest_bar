import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ContactButton } from './buttons';

export const Header: React.FC = () => {
  return (
    <Link
      href='/'
      className='fixed z-10 flex w-screen justify-between bg-[#201f23] px-2 py-2 shadow-sm shadow-black'
    >
      <Image
        src='/images/brest-bar-logo-1.png'
        width={60}
        height={200}
        alt='bar-brest-logo'
        className='animate-pulse duration-500 hover:rotate-12'
      />
      <ContactButton />
    </Link>
  );
};
