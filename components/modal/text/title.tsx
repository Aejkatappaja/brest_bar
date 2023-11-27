import strings from '@/utils/strings';

export const Title: React.FC = () => {
  return (
    <h1 className='text-rainbow text-lg font-semibold tracking-wide text-transparent'>
      {strings.modal.title}
    </h1>
  );
};
