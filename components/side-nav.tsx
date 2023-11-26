import React from 'react';
import { FilteredCardsLinks } from './filtered-cards-links';
import { FilterButton } from './filter-button';
import EstablishmentsList from './establishments-list';
import { ExtendsDataButton } from './extends-data-button';
import { FilterOptions } from './filter-options';

export const SideNav = () => {
  return (
    <div className='z-5 custom-scrollbar max-h-full w-[80%] overflow-y-scroll bg-[#201f23] pb-4 scrollbar-thin md:w-[505px] 2xl:w-[848px]'>
      <div className='border-b-2 border-[#3d3d3d] px-4 py-4 text-start text-4xl font-bold'>
        Trouver le bar qu&apos;il vous faut{' '}
        <span className='bg-gradient-to-r from-[#c213c7] to-[#b063f2] bg-clip-text text-transparent'>
          selon votre humeur
        </span>
      </div>
      <div className='border-b-2 border-[#3d3d3d] px-4 py-4 text-start'>
        <h2 className='text-2xl font-semibold'>Où boire à Brest ?</h2>
        <FilteredCardsLinks />
      </div>
      <div className='flex items-center justify-between px-4 py-4 text-start'>
        <h2 className='text-2xl font-semibold'>Explorer</h2>
        <FilterButton />
      </div>
      <FilterOptions />
      <EstablishmentsList />
      <div className='flex items-center justify-center'>
        <ExtendsDataButton />
      </div>
    </div>
  );
};
