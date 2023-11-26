'use client';

import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React, { ReactComponentElement } from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const { setIsModalVisible } = useVisibilityControlStore();
  return (
    <div className='flex items-center justify-center pr-4'>
      <button
        className='flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-105'
        onClick={() => setIsModalVisible(true)}
      >
        {props.children}
      </button>
    </div>
  );
};
