import React from 'react';
import { toast } from 'sonner';

export const useToast: React.FC = () => {
  return toast.message('En espérant avoir été à la hauteur !', {
    description:
      'Merci pour votre temps et au plaisir de pouvoir échanger avec vous !',
  });
};
