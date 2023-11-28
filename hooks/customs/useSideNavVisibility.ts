interface IHandleModalClick {
  isSideNavVisible: boolean;
  setIsSideNavVisible: (isSideNavVisible: boolean) => void;
  handleSideNavClick: () => void;
}

import { useVisibilityControlStore } from '@/hooks/zustand/useVisibilityControlStore';

const useSideNavVisibility = (): IHandleModalClick => {
  const { isSideNavVisible, setIsSideNavVisible } = useVisibilityControlStore();

  const handleSideNavClick = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return {
    isSideNavVisible,
    setIsSideNavVisible,
    handleSideNavClick,
  };
};

export default useSideNavVisibility;
