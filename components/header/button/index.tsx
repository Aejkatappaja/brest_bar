'use client';

import { BiSupport } from '@/utils/icons';
import React from 'react';
import strings from '@/utils/strings';
import useModalVisibility from '@/hooks/customs/useModalVisibility';

export const Button: React.FC = () => {
  const { handleModalClick } = useModalVisibility();
  return (
    <div className='flex items-center justify-center pr-4'>
      <button
        className='shadow-3d flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-105'
        onClick={handleModalClick}
      >
        <BiSupport /> {strings.header.contact}
      </button>
    </div>
  );
};
