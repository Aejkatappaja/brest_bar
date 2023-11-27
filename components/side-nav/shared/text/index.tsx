import React from 'react';

interface TitleProps {
  text: string;
}

export const SharedTitle: React.FC<TitleProps> = ({ text }) => {
  return <h2 className='text-2xl font-semibold'>{text}</h2>;
};
