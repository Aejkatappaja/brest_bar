'use client';

import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React from 'react';

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({}) => {
  const { isModalVisible, setIsModalVisible } = useVisibilityControlStore();

  return isModalVisible ? (
    <div
      className='fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/10'
      onClick={() => setIsModalVisible(!isModalVisible)}
    >
      <div
        className='h-3/4 w-80 bg-white md:h-1/2 md:w-1/2'
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  ) : null;
};
