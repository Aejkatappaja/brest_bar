import React from 'react';
import { Leading } from './leading';
import { PreFilteredCardsWrapper } from './pre-filtered-cards-wrapper';

interface SuggestionsProps {}

export const Suggestions: React.FC<SuggestionsProps> = ({}) => {
  return (
    <section className='border-b-2 border-dgrey px-4 py-4 text-start'>
      <Leading />
      <PreFilteredCardsWrapper />
    </section>
  );
};
