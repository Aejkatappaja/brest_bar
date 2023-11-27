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
        props.isClicked
          ? 'bg-gradient-to-r from-[#c213c7] to-[#b063f2] bg-clip-text text-transparent'
          : ''
      } rounded-3xl bg-[#2c2c2c] px-4 py-3 text-center text-sm font-semibold tracking-wide shadow-md shadow-black md:py-2`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
