'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

interface ExtendsDataButtonProps {}

export const ExtendsDataButton: React.FC<ExtendsDataButtonProps> = ({}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLimit = Number(searchParams.get('limit')) || 5;
  const createPageURL = (limit: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('limit', limit.toString());
    return `${pathname}?${params.toString()}`;
  };
  const router = useRouter();

  console.log(currentLimit, 'currentlimit');

  const handleNextPage = () => {
    return router.push(createPageURL(currentLimit + 5));
  };
  return (
    <button
      className='rounded-lg bg-[#2c2c2c] px-6 py-2'
      onClick={handleNextPage}
    >
      Plus
    </button>
  );
};
