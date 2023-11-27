import { useMapZoomStore } from '@/hooks/useMapZoom';
import React from 'react';
import { IoEyeOutline } from 'react-icons/io5';

interface zoomOnMapButtonProps {
  coordinates: [number, number];
}

export const ZoomOnMapButton: React.FC<zoomOnMapButtonProps> = ({
  coordinates,
}) => {
  const { setZoom } = useMapZoomStore();

  const handleClick = (coordinates: [number, number]) => {
    setZoom(coordinates);
  };
  return (
    <button
      className=' mr-1 rounded-full border-purple-500 bg-purple-500/30 px-2 py-2 shadow-md shadow-black'
      aria-label="Bouton permettant de zoomer vers l'établissement stué sur MapBox"
      onClick={() => handleClick(coordinates)}
    >
      <IoEyeOutline className='block text-center text-2xl text-purple-500' />
    </button>
  );
};
