'use client';

import React from 'react';
import { FilteredCard } from './filtered-card';
import { establishments } from '@/utils/establishments-list';
import { useDataFilterStore } from '@/hooks/useDataFilterStore';
import { useMapZoomStore } from '@/hooks/useMapZoom';

export const FilteredCardsLinks: React.FC = () => {
  const [clickedButton, setClickedButton] = React.useState<string | null>(null);
  const { setSearch, search } = useDataFilterStore();
  const { setZoom } = useMapZoomStore();

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
    setZoom([0, 0]);
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
