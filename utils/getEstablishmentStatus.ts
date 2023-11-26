export const getEstablishmentStatus = (status: string) => {
  if (status === 'OPERATIONAL') {
    return 'ACTIF';
  }
  return '';
};
