// import  { useState } from "react";

// function StarRating({ noOfStars = 5 }) {
//   // State for keeping track of the current rating and hover state
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   // Function to handle click event on a star
//   function handleClick(currentIndex) {
//     setRating(currentIndex);
//   }

//   // Function to handle mouse enter event on a star
//   function handleMouseEnter(currentIndex) {
//     setHover(currentIndex);
//   }

//   // Function to handle mouse leave event on a star
//   function handleMouseLeave() {
//     setHover(0);
//   }

//   // Array to hold JSX elements for stars
//   const stars = [];

//   // Loop to create star elements based on the number of stars
//   for (let i = 1; i <= noOfStars; i++) {
//     stars.push(
//       <span
//         key={i}
//         className={i <= (hover || rating) ? "active" : "inactive"}
//         onClick={() => handleClick(i)}
//         onMouseEnter={() => handleMouseEnter(i)}
//         onMouseLeave={handleMouseLeave}
//       >
//         ★
//       </span>
//     );
//   }

//   // Render the star rating component
//   return <div className="star-rating">{stars}</div>;
// }

// export default StarRating;


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
