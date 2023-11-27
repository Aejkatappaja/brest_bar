'use client';

import { IEstablishment } from '@/lib/getEstablishmentsList';
import { EstablishmentCard } from './establishment-card';
import React from 'react';
import { useFetch } from '@/hooks/useFetch';
import { haversine } from '@/utils/haversine';
import { useUserLocationStore } from '@/hooks/useUserLocationStore';
import { Loader } from './loader';
import { ExtendsDataButton } from './buttons';

export default function EstablishmentsList() {
  const { userLocation } = useUserLocationStore();
  const establishments = useFetch();
  const { apiData } = establishments;

  return establishments.isLoading ? (
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
        {apiData?.length ? (
          <ExtendsDataButton />
        ) : (
          <h3 className='bg-gradient-to-b from-[#c213c7] to-[#b063f2] bg-clip-text pt-6 text-xl font-bold tracking-wide text-transparent'>
            Aucun Résultat
          </h3>
        )}
      </div>
    </div>
  );
}
