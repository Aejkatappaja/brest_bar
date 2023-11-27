import {
  IEstablishment,
  ITotalEstablishments,
  getEstablishmentsList,
} from '@/lib/getEstablishmentsList';
import React from 'react';
import { useDataFilterStore } from '../zustand/useDataFilterStore';

export const useFetch = (allData?: boolean) => {
  const { limit, search, sort } = useDataFilterStore();
  const [apiData, setApiData] = React.useState<IEstablishment[] | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const sortResultByRating = sort === 'rating';
  const sortResultByTotalUsersRating = sort === 'user_ratings_total';

  React.useEffect(() => {
    setIsLoading(true);
    try {
      const fetchEstablishments = async () => {
        const establishments: ITotalEstablishments | undefined =
          await getEstablishmentsList(limit, search, allData);

        if (establishments) {
          let filteredEstablishments = establishments.data;
          if (sortResultByRating) {
            filteredEstablishments = filteredEstablishments.sort(
              (a, b) => Number(b.rating) - Number(a.rating)
            );
          }
          if (sortResultByTotalUsersRating) {
            filteredEstablishments = filteredEstablishments.sort(
              (a, b) =>
                Number(b.user_ratings_total) - Number(a.user_ratings_total)
            );
          }
          setApiData(filteredEstablishments);
          setIsLoading(false);
        } else throw new Error();
      };

      fetchEstablishments();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [limit, search, sort]);
  return { apiData, isLoading };
};
