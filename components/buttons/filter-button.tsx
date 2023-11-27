'use client';

import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import { IoFilterOutline } from '@/utils/icons';
import React from 'react';

export const FilterButton: React.FC = () => {
  const { isFilterVisible, setIsFilterVisible } = useVisibilityControlStore();
  const handleOptionsVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div className='flex items-center justify-center pr-4'>
      <button
        className='shadow-3d bg-rainbow flex items-center gap-2 rounded-lg px-4 py-2 text-base font-semibold tracking-wide text-white transition-transform hover:scale-105'
        onClick={handleOptionsVisibility}
        aria-label="bouton permettant de filtrer la recherche d'établissement"
      >
        <IoFilterOutline /> Filtrer
      </button>
    </div>
  );
};
