import React from 'react';
import { useDataFilterStore } from '../zustand/useDataFilterStore';
import { useVisibilityControlStore } from '../zustand/useVisibilityControlStore';

const useButtonClickAndSort = () => {
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

  return {
    clickedButton,
    isFilterVisible,
    sort,
    handleClick,
    handleSort,
    handleOptionClick,
  };
};

export default useButtonClickAndSort;
