'use client';

import MapBox from '@/components/map';
import { useFetch } from '@/hooks/useFetch';
import { useMapZoomStore } from '@/hooks/useMapZoom';
import { useUserLocationStore } from '@/hooks/useUserLocationStore';
import { IEstablishment } from '@/lib/getEstablishmentsList';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';

export default function Home() {
  const { setUserLocation, userLocation } = useUserLocationStore();

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
