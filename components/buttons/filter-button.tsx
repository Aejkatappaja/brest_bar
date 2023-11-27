'use client';

import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React from 'react';

import { IoFilterOutline } from 'react-icons/io5';

interface FilterButtonProps {}

export const FilterButton: React.FC<FilterButtonProps> = ({}) => {
  const { isFilterVisible, setIsFilterVisible } = useVisibilityControlStore();
  const handleOptionsVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div className='flex items-center justify-center pr-4'>
      <button
        className='flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#c213c7] to-[#b063f2] px-4 py-2 text-base font-semibold tracking-wide text-white shadow-md shadow-black transition-transform hover:scale-105'
        onClick={handleOptionsVisibility}
        aria-label="bouton permettant de filtrer la recherche d'établissement"
      >
        <IoFilterOutline /> Filtrer
      </button>
    </div>
  );
};
