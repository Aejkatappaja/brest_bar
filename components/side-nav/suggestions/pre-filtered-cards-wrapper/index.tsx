import React from 'react';
import { PreFilteredCard } from '../pre-filtered-card';
import useSearchAndFilter from '@/hooks/customs/useSearchAndFilter';
import { preFilteredCardsInformations } from '../../../../utils/pre-filtered-cards-informations';

export const PreFilteredCardsWrapper: React.FC = () => {
  const { clickedButton, handleCardClick } = useSearchAndFilter();

  return (
    <div className='grid grid-cols-3 gap-8 pt-6 font-semibold'>
      {preFilteredCardsInformations.map((item) => {
        const { src, text, query } = item;
        return (
          <PreFilteredCard
            key={src}
            src={src}
            text={text}
            isClicked={clickedButton === query}
            onClick={() => {
              handleCardClick(query);
            }}
          />
        );
      })}
    </div>
  );
};
