'use client';

import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React from 'react';
import { ToastButton } from './buttons';

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({}) => {
  const { isModalVisible, setIsModalVisible } = useVisibilityControlStore();

  return isModalVisible ? (
    <div
      className='fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/10'
      onClick={() => setIsModalVisible(!isModalVisible)}
    >
      <div
        className='flex h-1/5 w-80 items-center justify-center rounded-3xl bg-[#201f23] shadow-md shadow-black md:h-1/5 md:w-1/4 md:rounded-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <ToastButton />
      </div>
    </div>
  ) : null;
};
