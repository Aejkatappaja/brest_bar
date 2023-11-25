import React from 'react';

import { IoFilterOutline } from 'react-icons/io5';

interface FilterButtonProps {}

export const FilterButton: React.FC<FilterButtonProps> = ({}) => {
  return (
    <div className='flex items-center justify-center pr-4'>
      <button className='flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#c213c7] to-[#b063f2] px-4 py-2 text-base font-semibold tracking-wide text-white transition-transform hover:scale-105'>
        <IoFilterOutline /> Filtrer
      </button>
    </div>
  );
};