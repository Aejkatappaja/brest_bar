import React from 'react';

interface FilterOptionProps {
  isClicked: boolean;
  onClick: () => void;
  text: string;
}

export const FilterOption: React.FC<FilterOptionProps> = ({ ...props }) => {
  return (
    <button
      className={`${
        props.isClicked ? 'text-rainbow' : ''
      } shadow-3d bg-grey rounded-3xl px-4 py-3 text-center text-sm font-semibold tracking-wide md:py-2`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
