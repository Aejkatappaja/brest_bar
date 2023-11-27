'use client';

import React from 'react';
import { FilterOption } from './filters/filter-option';
import { searchFilterList } from '@/utils/search-filter-list';

import useButtonClickAndSort from '@/hooks/customs/useSortAndFilter';
import { SearchBar } from './searchbar';

export const FilterOptions: React.FC = () => {
  const { clickedButton, isFilterVisible, handleOptionClick } =
    useButtonClickAndSort();

  return isFilterVisible ? (
    <div className=' flex flex-col justify-start gap-3 px-4 py-2 md:flex-row'>
      {searchFilterList.map((item) => {
        const { term, title } = item;
        return (
          <FilterOption
            key={term}
            text={title}
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
