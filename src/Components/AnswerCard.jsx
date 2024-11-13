import React, { useState } from 'react';
import './AnswerCard.css'

const AnswerCard = ({title,image, array, setArray}) => {
  // State to track if the div has been clicked
  const clicked = array.includes(title);
  // Handler for the click event
  const handleClick = () => {
    !clicked; // Toggle the clicked state
    setArray((prevArray) => {
      if (prevArray.includes(title)) {
        // Remove the title if it exists in the array
        return prevArray.filter(item => item !== title);
      } else {
        // Add the title if it doesn't exist
        return [...prevArray, title];
      }
    }); // Add the title to the array when clicked
  };

  return (
    <div className={`answer-card-container ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <img className={`answer-card-image ${clicked ? 'clicked' : ''}`} src={image}></img>
      <p className={`answer-card-title ${clicked ? 'clicked' : ''}`}>{title}</p>
    </div>
  )
}

export default AnswerCard
