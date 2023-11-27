import React from 'react';

import useSideNavVisibility from '@/hooks/customs/useSideNavVisibility';
import { Title } from './text';
import { HideSideNav } from './button';

export const Leading: React.FC = () => {
  const { handleSideNavClick } = useSideNavVisibility();
  return (
    <div className='flex justify-between'>
      <Title />
      <HideSideNav onClick={() => handleSideNavClick()} />
    </div>
  );
};
