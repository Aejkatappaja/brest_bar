'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import MapBox from '@/components/map';
import React from 'react';
import { useUserLocationStore } from '@/hooks/zustand/useUserLocationStore';

export default function Home() {
  const { setUserLocation } = useUserLocationStore();

  React.useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation: [number, number] = [
            position.coords.latitude,
            position.coords.longitude,
          ];

          setUserLocation(newLocation);
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [setUserLocation]);

  return (
    <>
      <MapBox />
    </>
  );
}
