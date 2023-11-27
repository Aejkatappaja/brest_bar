import React from 'react';

import { Logo } from './logo';
import { Button } from './button';

export const Header: React.FC = () => {
  return (
    <nav className='shadow-3d fixed z-10 flex w-screen justify-between bg-grey px-2 py-2'>
      <Logo />
      <Button />
    </nav>
  );
};
