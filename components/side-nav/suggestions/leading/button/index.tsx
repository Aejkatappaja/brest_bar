import { FaArrowLeft } from '@/utils/icons';

export interface IHideSideNav {
  onClick: () => void;
}

export const HideSideNav: React.FC<IHideSideNav> = ({ onClick }) => {
  return (
    <button
      className='border-lg shadow-3d flex items-center justify-center rounded-lg bg-grey px-4 py-3 active:shadow-inner'
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  );
};
