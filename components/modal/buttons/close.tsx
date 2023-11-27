import { GiCrossMark } from '@/utils/icons';
import React from 'react';

export interface IHandleModalClick {
  onClick: () => void;
}

export const CloseModalButton: React.FC<IHandleModalClick> = ({ onClick }) => {
  return (
    <button
      className='absolute right-4 top-4 text-violet-500'
      onClick={onClick}
    >
      <GiCrossMark />
    </button>
  );
};
