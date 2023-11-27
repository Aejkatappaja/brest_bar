import { useVisibilityControlStore } from '../zustand/useVisibilityControlStore';

const useOptionsVisibility = (initialVisibility = false) => {
  const { isFilterVisible, setIsFilterVisible } = useVisibilityControlStore();

  const handleOptionsVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return {
    isFilterVisible,
    handleOptionsVisibility,
  };
};

export default useOptionsVisibility;
