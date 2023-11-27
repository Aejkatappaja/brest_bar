'use client';

import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React, { ReactComponentElement } from 'react';
import { BiSupport } from 'react-icons/bi';

export const ContactButton: React.FC = () => {
  const { setIsModalVisible } = useVisibilityControlStore();

  const handleContactClick = () => {
    setIsModalVisible(true);
  };

  return (
    <div className='flex items-center justify-center pr-4'>
      <button
        className='flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-md shadow-black transition-transform hover:scale-105'
        onClick={handleContactClick}
      >
        <BiSupport /> Faire une demande
      </button>
    </div>
  );
};
