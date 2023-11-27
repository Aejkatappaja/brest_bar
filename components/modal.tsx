'use client';

import React from 'react';
import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import { ToastButton } from './buttons';
import { GiCrossMark } from '@/utils/icons';

export const Modal: React.FC = () => {
  const { isModalVisible, setIsModalVisible } = useVisibilityControlStore();
  const handleCloseModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return isModalVisible ? (
    <div
      className='fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/10'
      onClick={() => setIsModalVisible(!isModalVisible)}
    >
      <div
        className='relative flex h-1/4 w-80 flex-col items-center justify-around rounded-3xl bg-[#201f23] shadow-md shadow-black md:h-1/3 md:w-1/4 md:rounded-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className='text-rainbow text-lg font-semibold tracking-wide text-transparent'>
          Merci pour votre visite !
        </h1>
        <span className='text-4xl'>👾</span>
        <ToastButton />
        <button
          className='absolute right-4 top-4 text-violet-500'
          onClick={handleCloseModal}
        >
          <GiCrossMark />
        </button>
      </div>
    </div>
  ) : null;
};
