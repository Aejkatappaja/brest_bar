import Image from 'next/image';
import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  return (
    <div className='z-10 flex justify-between bg-[#201f23] px-2 py-2 shadow-sm shadow-black'>
      <Image
        src='/images/brest-bar-logo-1.png'
        width={60}
        height={200}
        alt='bar-brest-logo'
      />
      <Button>
        <BiSupport /> Faire une demande
      </Button>
    </div>
  );
};
