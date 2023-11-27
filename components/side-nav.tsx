'use client';
import React from 'react';
import { FilteredCardsLinks } from './filtered-cards-links';
import { FilterButton } from './buttons/filter-button';
import EstablishmentsList from './establishments-list';
import { FilterOptions } from './filter-options';
import { HideNavButton } from './buttons/hide-nav-button';
import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';

export const SideNav = () => {
  const { isSideNavVisible } = useVisibilityControlStore();

  return (
    <div
      className={`${
        !isSideNavVisible ? 'disappear' : 'appear'
      } custom-scrollbar shadow-3d fixed  z-[9] h-screen w-[80%] overflow-y-scroll bg-[#201f23] pt-20 transition-transform duration-300 ease-in-out scrollbar-thin md:w-[505px] 2xl:w-[848px]`}
    >
      <div className='relative border-b-2 border-[#3d3d3d] px-4 py-4 text-start text-4xl font-bold'>
        Trouver le bar qu&apos;il vous faut{' '}
        <span className='text-rainbow'>selon votre humeur</span>
      </div>
      <div className='border-b-2 border-[#3d3d3d] px-4 py-4 text-start'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>Où boire à Brest ?</h2>
          <HideNavButton />
        </div>
        <FilteredCardsLinks />
      </div>
      <div className='flex items-center justify-between px-4 py-4 text-start'>
        <h2 className='text-2xl font-semibold'>Explorer</h2>
        <FilterButton />
      </div>
      <FilterOptions />
      <EstablishmentsList />
    </div>
  );
};
