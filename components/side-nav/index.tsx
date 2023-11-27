'use client';
import React from 'react';

import { useVisibilityControlStore } from '@/hooks/zustand/useVisibilityControlStore';

import { Heading } from './heading';
import { Suggestions } from './suggestions';

import { FilterOptions } from './results-view/options';
import EstablishmentsList from './results-view/display-results';
import { Leading } from './results-view/leading';

export const SideNav = () => {
  const { isSideNavVisible } = useVisibilityControlStore();

  return (
    <div
      className={`${
        !isSideNavVisible ? 'disappear' : 'appear'
      } custom-scrollbar shadow-3d fixed  z-[9] h-screen w-[80%] overflow-y-scroll bg-[#201f23] pt-20 transition-transform duration-300 ease-in-out scrollbar-thin md:w-[505px] 2xl:w-[848px]`}
    >
      <Heading />
      <Suggestions />
      <Leading />
      <FilterOptions />
      <EstablishmentsList />
    </div>
  );
};
