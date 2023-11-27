import { useToast } from '@/hooks/useToast';
import { GrToast } from '@/utils/icons';
import React from 'react';

export const ToastButton: React.FC = ({}) => {
  return (
    <button
      className='shadow-3d flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 font-semibold active:translate-y-1'
      onClick={useToast}
    >
      <GrToast /> Envoyer le toast !
    </button>
  );
};
