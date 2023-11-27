import { SharedTitle } from '@/components/side-nav/shared/text';
import strings from '@/utils/strings';
import React from 'react';

interface TextProps {}

export const Title: React.FC = () => {
  return <SharedTitle text={strings.sidenav.explore} />;
};
