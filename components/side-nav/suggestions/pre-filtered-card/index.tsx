import React from 'react';
import { Frame } from './card/frame';
import { CardImage } from './card/image';
import { Title } from './card/text';

interface PreFilteredCardProps {
  src: string;
  isClicked: boolean;
  onClick: () => void;
  text: string;
}

export const PreFilteredCard: React.FC<PreFilteredCardProps> = ({
  onClick,
  src,
  isClicked,
  text,
}) => {
  return (
    <div className='flex flex-col gap-2' onClick={onClick}>
      <Frame isClicked={isClicked}>
        <CardImage src={src} />
      </Frame>
      <Title text={text} isClicked={isClicked} />
    </div>
  );
};
