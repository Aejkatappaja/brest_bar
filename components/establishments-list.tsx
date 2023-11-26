import { getEstablishmentsList } from '@/lib/getEstablishmentsList';

import { EstablishmentCard } from './establishment-card';

export default async function EstablishmentsList({ limit }: { limit: number }) {
  console.log(limit, 'limit from establishment-list');

  const establishments = await getEstablishmentsList(limit);

  return (
    <div className='space-y-4 px-4 py-4'>
      {establishments?.data?.map((item) => {
        return <EstablishmentCard item={item} key={item.id} />;
      })}
    </div>
  );
}
