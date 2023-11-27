import React from 'react';

import strings from '@/utils/strings';
import { SharedTitle } from '@/components/side-nav/shared/text';

export const Title: React.FC = () => {
  return <SharedTitle text={strings.sidenav.suggestions} />;
};
