'use client';

import {
  ITotalEstablishments,
  getEstablishmentsList,
  IEstablishment,
} from '@/lib/getEstablishmentsList';

import { EstablishmentCard } from './establishment-card';
import { useDataFilterStore } from '@/hooks/useDataFilterStore';
import React from 'react';

export default function EstablishmentsList() {
  const { limit, search } = useDataFilterStore();
  const [establishments, setEstablishments] = React.useState<
    IEstablishment[] | null
  >(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      const fetchEstablishments = async () => {
        const establishments: ITotalEstablishments | undefined =
          await getEstablishmentsList(limit, search);

        if (establishments) {
          // let filteredEstablishments = establishments.data;
          // if (sortResultByRating) {
          //   filteredEstablishments = filteredEstablishments.sort(
          //     (a, b) => Number(b.rating) - Number(a.rating)
          //   );
          // }
          setEstablishments(establishments.data);
          setIsLoading(false);
        } else throw new Error();
      };

      fetchEstablishments();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [limit, search]);

  return isLoading ? (
    <div> loading...</div>
  ) : (
    <div className='space-y-4 px-4 py-4'>
      {establishments?.map((item) => {
        return <EstablishmentCard item={item} key={item.id} />;
      })}
    </div>
  );
}
