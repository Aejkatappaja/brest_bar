import React from 'react';

interface FrameProps {
  children: React.ReactNode;
  isClicked: boolean;
}

export const Frame: React.FC<FrameProps> = ({ children, isClicked }) => {
  return (
    <div
      className={`${
        isClicked
          ? 'bg-gradient-to-b from-[#c213c7]/30 to-[#b063f2]/30 text-transparent shadow-inner shadow-black '
          : 'shadow-md shadow-black'
      }  flex h-full rounded-xl bg-[#2c2c2c] py-2  md:py-8 2xl:justify-center 2xl:py-16`}
    >
      {children}
    </div>
  );
};
