'use client';

import { IEstablishment, haversine } from '@/lib';
import { EstablishmentCard } from './establishment-card';
import React from 'react';
import { useFetch } from '@/hooks/customs/useFetch';
import { useUserLocationStore } from '@/hooks/zustand/useUserLocationStore';
import { Loader } from '@/components/loader';
import { ExtendsDataButton } from './button';

export default function EstablishmentsList() {
  const { userLocation } = useUserLocationStore();
  const establishments = useFetch();
  const { apiData } = establishments;
  const { isLoading } = establishments;

  return isLoading ? (
    <Loader />
  ) : (
    <div className='space-y-4 px-4 py-4'>
      {apiData?.map((item: IEstablishment) => {
        const { location } = item;
        const { coordinates } = location;
        let distance: number | null = null;

        if (userLocation) {
          distance = haversine(
            userLocation[0],
            userLocation[1],
            coordinates[1],
            coordinates[0]
          );
        }

        return (
          <EstablishmentCard item={item} key={item.id} distance={distance} />
        );
      })}

      <div className='flex items-center justify-center pb-6'>
        {apiData?.length ? <ExtendsDataButton /> : <Loader />}
      </div>
    </div>
  );
}
