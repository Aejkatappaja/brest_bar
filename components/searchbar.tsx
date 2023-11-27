import { useDataFilterStore } from '@/hooks/useDataFilterStore';
import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const SearchBar: React.FC = () => {
  const { search, setSearch } = useDataFilterStore();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
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
        value={search}
        onChange={handleSearch}
        type='text'
        className='block w-full rounded-3xl border-2 border-[#313030] bg-[#2c2c2c] from-[#c213c7] to-[#b063f2] py-[9px] pl-10 text-sm font-semibold tracking-wide text-[#909090ae] shadow-md shadow-black outline-none duration-700 placeholder:font-semibold placeholder:text-[#909090ae] focus:bg-gradient-to-r focus:bg-clip-text focus:text-transparent'
      />
    </div>
  );
};
