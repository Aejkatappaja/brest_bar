import React from 'react';
import { useMapZoomStore } from '../zustand/useMapZoom';
import { useDataFilterStore } from '../zustand/useDataFilterStore';

const useSearchAndFilter = () => {
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
  return {
    clickedButton,
    search,
    handleClick,
    handleSearch,
    handleCardClick,
  };
};

export default useSearchAndFilter;
