import { IEstablishment } from '@/lib/getEstablishmentsList';
import { IoEyeOutline } from 'react-icons/io5';
import React from 'react';
import {
  generateRatingStars,
  getEstablishmentStatus,
  getEstablishmentType,
} from '@/utils';

interface EstablishmentCardProps {
  item: IEstablishment;
}

export const EstablishmentCard: React.FC<EstablishmentCardProps> = ({
  item,
}) => {
  const {
    name,
    rating,
    address,
    user_ratings_total,
    status,
    opening_hours,
    international_phone_number,
  } = item;

  const stars = generateRatingStars(rating);
  const establishmentType = getEstablishmentType(name);
  const establishmentStatus = getEstablishmentStatus(status);
  return (
    <div className='flex h-full w-full items-center justify-between overflow-hidden rounded-2xl bg-[#2c2c2c] px-6 py-4'>
      <div className='space-y-1 '>
        <p className='font-bold text-purple-500'>{establishmentType}</p>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <h3 className=' w-[7rem] truncate text-purple-500 md:w-[17rem]'>
          {address}
        </h3>
        <p className='flex items-center gap-2'>
          <span className='flex'> {stars}</span> {user_ratings_total} avis{' '}
        </p>

        <p className='text-green-600'>{establishmentStatus}</p>
      </div>

      <button className=' mr-1 rounded-full border-purple-500 bg-purple-500/30 px-2 py-2'>
        <IoEyeOutline className='block text-center text-2xl text-purple-500' />
      </button>
    </div>
  );
};
