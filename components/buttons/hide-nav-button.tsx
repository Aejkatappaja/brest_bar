import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export const HideNavButton: React.FC = () => {
  const { isSideNavVisible, setIsSideNavVisible } = useVisibilityControlStore();
  const handleHideNavClick = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };
  return (
    <button
      className='border-lg flex items-center justify-center rounded-lg bg-[#2c2c2c] px-4 py-3 shadow-md shadow-black'
      onClick={handleHideNavClick}
    >
      <FaArrowLeft />
    </button>
  );
};
