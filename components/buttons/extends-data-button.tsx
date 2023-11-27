'use client';

import { useDataFilterStore } from '@/hooks/useDataFilterStore';
import React from 'react';

import { ImPlus } from 'react-icons/im';

interface ExtendsDataButtonProps {}

export const ExtendsDataButton: React.FC<ExtendsDataButtonProps> = ({}) => {
  const { setLimit } = useDataFilterStore();
  const handleNextPage = () => {
    setLimit(5);
  };
  return (
    <button
      className='shadow-3d rounded-lg bg-[#2c2c2c] px-14 py-3'
      aria-label='bouton permettant de charger plus de data'
      onClick={handleNextPage}
    >
      <ImPlus className='text-xs' />
    </button>
  );
};
