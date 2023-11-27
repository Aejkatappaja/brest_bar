import React from 'react';
import { Title } from './text';
import { ToggleFiltersButton } from './button';

interface LeadingProps {}

export const Leading: React.FC<LeadingProps> = ({}) => {
  return (
    <div className='flex items-center justify-between px-4 py-4 text-start'>
      <Title />
      <ToggleFiltersButton />
    </div>
  );
};
