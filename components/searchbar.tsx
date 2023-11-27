import { useDataFilterStore } from '@/hooks/useDataFilterStore';
import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useDebouncedCallback } from 'use-debounce';

export const SearchBar: React.FC = () => {
  const { setSearch } = useDataFilterStore();
  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setSearch(inputValue);
    },
    500
  );

  return (
    <div className='relative flex flex-1 flex-shrink-0 items-center'>
      <label
        htmlFor='search'
        className='absolute flex py-[0.8rem] pl-4 text-center '
      >
        <FaMagnifyingGlass className='text-violet-500/60' />
      </label>
      <input
        placeholder='Rechercher'
        name='search'
        onChange={handleSearch}
        type='text'
        className='shadow-3d bg-grey w-full rounded-3xl from-[#c213c7] to-[#b063f2] py-[9px] pl-10 text-sm font-semibold tracking-wide outline-none  duration-700 placeholder:font-semibold placeholder:text-[#909090ae] focus:bg-slate-600/30 '
      />
    </div>
  );
};
