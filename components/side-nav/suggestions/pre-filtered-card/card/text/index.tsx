import React from 'react';

interface TitleProps {
  isClicked: boolean;
  text: string;
}

export const Title: React.FC<TitleProps> = ({ isClicked, text }) => {
  return (
    <h3 className={`text-center ${isClicked ? 'text-rainbow' : ''}`}>{text}</h3>
  );
};
