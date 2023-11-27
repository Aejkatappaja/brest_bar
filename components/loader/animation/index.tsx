import React from 'react';

export interface IAnimation {
  children: React.ReactNode;
}

export const Animation: React.FC<IAnimation> = ({ children }) => {
  return (
    <div className='flex h-16 w-16 animate-ping items-center justify-center rounded-full bg-violet-500 text-sm font-light'>
      {children}
    </div>
  );
};
