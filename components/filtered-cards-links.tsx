'use client';

import React from 'react';
import { FilteredCard } from './filtered-card';
import { establishments } from '@/utils/establishments-list';

export const FilteredCardsLinks: React.FC = () => {
  const [clickedButton, setClickedButton] = React.useState<string | null>(null);

  const handleClick = (query: string) => {
    setClickedButton(query);
  };

  return (
    <div className='grid grid-cols-3 gap-5 pt-6 font-semibold'>
      {establishments.map((item) => {
        const { src, text, query } = item;
        return (
          <FilteredCard
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
