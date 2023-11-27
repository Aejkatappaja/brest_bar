import React from 'react';
import { Animation } from './animation';
import { Text } from './text';

export const Loader: React.FC = () => {
  return (
    <Animation>
      <Text />
    </Animation>
  );
};
