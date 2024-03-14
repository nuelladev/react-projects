import  { useState } from 'react';
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  const stars = [];
  for (let i = 1; i <= noOfStars; i++) {
    stars.push(
      <span
        key={i}
        className={i <= (hover || rating) ? "active" : "inactive"}
        onClick={() => handleClick(i)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </span>
    );
  }
  return <div className='star-rating'>{stars}</div>;
}
