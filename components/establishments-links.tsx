'use client';

import React from 'react';
import { EstablishmentsCard } from './establishments-card';
import { establishments } from '@/utils/establishments-list';

export const EstablishmentLinks: React.FC = () => {
  const [clickedButton, setClickedButton] = React.useState<string | null>(null);

  const handleClick = (query: string) => {
    setClickedButton(query);
  };

  return (
    <div className='grid grid-cols-3 gap-5 pt-6 font-semibold'>
      {establishments.map((item) => {
        const { src, text, query } = item;
        return (
          <EstablishmentsCard
            key={src}
            src={src}
            text={text}
            query={query}
            isClicked={clickedButton === query}
            onClick={() => handleClick(query)}
          />
        );
      })}
    </div>
  );
};
