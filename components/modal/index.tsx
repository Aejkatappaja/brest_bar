'use client';

import React from 'react';

import { Span, Title } from './text';
import useModalVisibility from '@/hooks/customs/useModalVisibility';
import { CloseModalButton, ToastButton } from './buttons';

export const Modal: React.FC = () => {
  const { handleModalClick, isModalVisible } = useModalVisibility();

  return isModalVisible ? (
    <div
      className='top,-0 fixed z-50 flex h-screen w-screen items-center justify-center bg-black/10'
      onClick={() => handleModalClick()}
    >
      <div
        className='relative flex h-1/4 w-80 flex-col items-center justify-around rounded-3xl bg-[#201f23] shadow-md shadow-black md:h-1/3 md:w-1/4 md:rounded-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <Title />
        <Span />
        <ToastButton />
        <CloseModalButton onClick={() => handleModalClick()} />
      </div>
    </div>
  ) : null;
};
