import { establishmentTypesList } from './establishmentTypeList';

export const getEstablishmentType = (name: string) => {
  for (const { keywords, type } of establishmentTypesList) {
    if (keywords.some((keyword) => name.includes(keyword))) {
      return type;
    }
  }
  return 'TYPE NON DÉFINI';
};
