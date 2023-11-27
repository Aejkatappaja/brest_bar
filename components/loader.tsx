import React from 'react';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className='h-16 w-16 animate-ping rounded-full bg-violet-500'></div>
  );
};
