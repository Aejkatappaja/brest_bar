'use client';
import { useDataFilterStore } from '@/hooks/useDataFilterStore';
import { useVisibilityControlStore } from '@/hooks/useVisibilityControlStore';
import React from 'react';

export const FilterOptions: React.FC = () => {
  const { isFilterVisible } = useVisibilityControlStore();
  const { setSort } = useDataFilterStore();
  return isFilterVisible ? (
    <div className=' flex justify-start gap-3 px-4 py-2'>
      <button
        className=' rounded-3xl border px-4 py-2 text-center text-sm font-semibold'
        onClick={() => setSort('rating')}
      >
        meilleurs notes
      </button>{' '}
      <div className=' rounded-3xl border px-4 py-2 text-center text-sm'>
        nombre d'avis
      </div>{' '}
      <div className=' rounded-3xl border px-4 py-2 text-center text-sm'>
        distance
      </div>
    </div>
  ) : (
    false
  );
};
