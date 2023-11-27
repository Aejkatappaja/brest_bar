import strings from '@/utils/strings';

export const Title = () => {
  return (
    <h1 className='text-4xl font-bold'>
      {strings.sidenav.title}{' '}
      <span className='text-rainbow'>{strings.sidenav.span}</span>
    </h1>
  );
};
