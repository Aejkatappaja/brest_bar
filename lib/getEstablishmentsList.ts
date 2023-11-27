interface Location {
  type: string;
  coordinates: [number, number];
}

interface OpeningHours {
  0?: string;
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
}

export type IEstablishment = {
  id: number;
  name: string;
  location: Location;
  place_id: string;
  rating: string;
  address: string;
  status: string;
  formatted_phone_number: string;
  international_phone_number: string;
  maps_url: string;
  user_ratings_total: number;
  opening_hours: OpeningHours;
  website: string;
  category: number[];
  type: number[];
};

export type ITotalEstablishments = { data: IEstablishment[] };
export async function getEstablishmentsList(
  limit?: number,
  search?: string,
  allData?: boolean
): Promise<ITotalEstablishments | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(
      !allData
        ? `${url}?limit=${limit}&search=${search}`
        : `${url}?search=${search}`,

      {
        next: { revalidate: 0 },
        method: 'GET',
      }
    );

    const response: ITotalEstablishments = await res.json();

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch data');
  }
}
