'use client';
import { useDataFilterStore } from '@/hooks/useDataFilterStore';
import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React from 'react';
import { FilterOption } from './filter-option';
import { searchFilterList } from '@/utils/search-filter-list';
import { SearchBar } from './searchbar';

export const FilterOptions: React.FC = () => {
  const [clickedButton, setClickedButton] = React.useState<string | null>(null);
  const { isFilterVisible } = useVisibilityControlStore();
  const { setSort, sort } = useDataFilterStore();

  const handleClick = (term: string) => {
    setClickedButton((prevClickedButton) =>
      prevClickedButton === term ? null : term
    );
  };
  const handleSort = (term: string) => {
    setSort(sort === term ? '' : term);
  };

  const handleOptionClick = (term: string) => {
    handleClick(term);
    handleSort(term);
  };

  return isFilterVisible ? (
    <div className=' flex flex-col justify-start gap-3 px-4 py-2 md:flex-row'>
      {searchFilterList.map((item) => {
        const { term } = item;
        return (
          <FilterOption
            text='Meilleurs Notes'
            onClick={() => handleOptionClick(term)}
            isClicked={clickedButton === term}
          />
        );
      })}

      <SearchBar />
    </div>
  ) : (
    false
  );
};
