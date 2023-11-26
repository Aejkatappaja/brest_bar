'use client';

import React from 'react';
import { FilteredCard } from './filtered-card';
import { establishments } from '@/utils/establishments-list';
import { useDataFilterStore } from '@/hooks/useDataFilterStore';

export const FilteredCardsLinks: React.FC = () => {
  const [clickedButton, setClickedButton] = React.useState<string | null>(null);
  const { setSearch, search } = useDataFilterStore();

  const handleClick = (query: string) => {
    setClickedButton((prevClickedButton) =>
      prevClickedButton === query ? null : query
    );
  };

  const handleSearch = (query: string) => {
    setSearch(search === query ? '' : query);
  };

  const handleCardClick = (query: string) => {
    handleClick(query);
    handleSearch(query);
  };

  return (
    <div className='grid grid-cols-3 gap-8 pt-6 font-semibold'>
      {establishments.map((item) => {
        const { src, text, query } = item;
        return (
          <FilteredCard
            key={src}
            src={src}
            text={text}
            query={query}
            isClicked={clickedButton === query}
            onClick={() => {
              handleCardClick(query);
            }}
          />
        );
      })}
    </div>
  );
};
