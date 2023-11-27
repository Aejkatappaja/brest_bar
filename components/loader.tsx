import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className='flex h-16 w-16 animate-ping items-center justify-center rounded-full bg-violet-500 text-sm font-light'>
      {' '}
      <h1>Loading</h1>
    </div>
  );
};
