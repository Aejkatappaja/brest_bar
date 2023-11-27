import { FaStar, FaStarHalfStroke } from '../utils/icons';

export const generateRatingStars = (note: string) => {
  let array = [];
  let stars = 5;
  for (let i = 0; i < stars; i++) {
    array.push(
      i < Math.floor(Number(note)) ? (
        <FaStar key={i} style={{ color: '#ebb434' }} />
      ) : i === Math.floor(Number(note)) && Number(note) % 1 >= 0.5 ? (
        <FaStarHalfStroke key={i} style={{ color: '#ebb434' }} />
      ) : (
        <FaStar key={i} style={{ color: 'gray' }} />
      )
    );
  }

  return array;
};
