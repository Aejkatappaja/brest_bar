import { useDataFilterStore } from '@/hooks/useDataFilterStore';
import { useFetch } from '@/hooks/useFetch';
import { useMapZoomStore } from '@/hooks/useMapZoom';
import { IEstablishment } from '@/lib/getEstablishmentsList';
import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect } from 'react';
import { Loader } from './loader';

export default function MapBox() {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = React.useRef(null);

  const allData = true;

  const [loading, setLoading] = useState(true);

  const establishments = useFetch(allData);
  const { apiData } = establishments;
  const { zoom } = useMapZoomStore();
  const { search } = useDataFilterStore();
  let colorToPick: string;
  switch (search) {
    case 'bar':
      colorToPick = '#dd7826';
      break;
    case 'cave':
      colorToPick = '#5d002a';
      break;
    case 'brasserie':
      colorToPick = '#f9da86';
      break;
    default:
      colorToPick = '#b063f2';
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const node = mapNode.current;
      if (typeof window === 'undefined' || node === null) return;

      const mapboxMap = new mapboxgl.Map({
        container: node,
        accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-4.4834526, 48.3831122],
        zoom: 9.5,
      });

      setMap(mapboxMap);
      apiData?.map((establishment: IEstablishment) => {
        const { name, address, location, international_phone_number } =
          establishment;
        const { coordinates } = location;

        if (coordinates && coordinates.length === 2) {
          const markerElement = document.createElement('div');
          markerElement.style.width = '20px';
          markerElement.style.height = '20px';
          markerElement.style.borderRadius = '50%';
          markerElement.style.background = colorToPick;
          markerElement.style.border = '3px solid #111111';
          const marker = new mapboxgl.Marker({
            element: markerElement,
          })
            .setLngLat(coordinates)
            .setPopup(
              new mapboxgl.Popup({ closeButton: true }).setHTML(
                `<div style="color: black"><h3 style="color: #b063f2">${name}</h3><p>${address}</p><p>${international_phone_number}</p>
              </div>`
              )
            )
            .addTo(mapboxMap);
          {
            zoom[0] !== 0 &&
              mapboxMap.flyTo({
                duration: 4000,
                center: zoom,
                zoom: 16,
                essential: true,
              });
          }
        } else {
          console.error('Invalid coordinates:', coordinates);
        }
      });

      setLoading(false);
    };

    fetchData();
  }, [apiData, zoom, search]);

  return (
    <>
      {loading && (
        <div className='flex h-full w-full items-center justify-center bg-[#1f1f1f]'>
          <Loader />
        </div>
      )}
      <div ref={mapNode} style={{ width: '100%', height: '100%' }} />
    </>
  );
}
