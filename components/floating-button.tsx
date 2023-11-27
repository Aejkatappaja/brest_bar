'use client';
import { FaArrowRight } from 'react-icons/fa';
import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React from 'react';

interface FloatingButtonProps {}

export const FloatingButton: React.FC<FloatingButtonProps> = ({}) => {
  const { isSideNavVisible, setIsSideNavVisible } = useVisibilityControlStore();
  return (
    !isSideNavVisible && (
      <button
        className='absolute left-[-3] top-[10rem] flex h-20 w-10 items-center justify-center rounded-r-xl bg-[#2c2c2c] shadow-md shadow-black'
        onClick={() => setIsSideNavVisible(!isSideNavVisible)}
      >
        <FaArrowRight />
      </button>
    )
  );
};
