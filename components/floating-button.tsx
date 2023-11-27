'use client';

import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import { FaArrowRight } from '@/utils/icons';
import React from 'react';

export const FloatingButton: React.FC = () => {
  const { isSideNavVisible, setIsSideNavVisible } = useVisibilityControlStore();
  return (
    !isSideNavVisible && (
      <button
        className='bg-grey shadow-3d absolute left-[-3] top-[16rem] flex h-20 w-10 cursor-pointer items-center justify-center rounded-r-xl md:top-[12rem]'
        onClick={() => setIsSideNavVisible(!isSideNavVisible)}
      >
        <FaArrowRight className='cursor-pointer' />
      </button>
    )
  );
};
