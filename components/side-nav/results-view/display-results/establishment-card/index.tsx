import { IEstablishment } from '@/lib/getEstablishmentsList';

import React from 'react';
import { generateRatingStars, getEstablishmentType } from '@/utils';
import { GiPathDistance } from '@/utils/icons';
import { ZoomOnMapButton } from './button';

interface EstablishmentCardProps {
  item: IEstablishment;
  distance: number | null;
}

export const EstablishmentCard: React.FC<EstablishmentCardProps> = ({
  item,
  distance,
}) => {
  const { name, rating, address, user_ratings_total, status, location } = item;
  const { coordinates } = location;

  const stars = generateRatingStars(rating);
  const establishmentType = getEstablishmentType(name);

  return (
    <div className='shadow-3d flex h-full w-full items-center justify-between overflow-hidden rounded-2xl bg-grey px-6 py-4'>
      <div className='space-y-5 '>
        <div className='space-y-1'>
          <p className='font-bold text-purple-500'>{establishmentType}</p>
          <h1 className='text-2xl font-bold'>{name}</h1>
          <h2 className=' w-[7rem] truncate text-purple-500 md:w-[17rem]'>
            {address}
          </h2>
          <p className='flex items-center gap-2'>
            <span className='flex'> {stars}</span> {user_ratings_total}{' '}
            {user_ratings_total > 0 ? 'avis' : 'aucun avis'}{' '}
          </p>
        </div>
        {distance && (
          <div className='font-sm shadow-3d flex w-36 items-center justify-center gap-2 rounded-2xl bg-blue-600/20 py-[0.20rem] text-center text-blue-300/80'>
            <GiPathDistance /> {distance} KM
          </div>
        )}
      </div>
      <ZoomOnMapButton coordinates={coordinates} />
    </div>
  );
};
