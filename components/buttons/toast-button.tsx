import { useToast } from '@/hooks/useToast';
import React from 'react';
import { GrToast } from 'react-icons/gr';

interface ToastButtonProps {}

export const ToastButton: React.FC<ToastButtonProps> = ({}) => {
  return (
    <button
      className='flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 font-semibold shadow-md shadow-black active:translate-y-1'
      onClick={useToast}
    >
      <GrToast /> Envoyer le toast !
    </button>
  );
};
