import React, { useState, useEffect } from 'react';
import './TasteCard.css';

const TasteCard = ({ title, image, array, setArray }) => {
  // States for each click state and the level
  const [clickStates, setClickStates] = useState([false, false, false, false, false]);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const existingItem = array.find(item => item.title === title);
    if (existingItem) {
      setLevel(existingItem.level);
      const newClickStates = clickStates.map((_, index) => index < existingItem.level);
      setClickStates(newClickStates);
    }
  }, [array, title]);

  const handleClick = (id) => {
    const index = parseInt(id) - 1;
    let levelUpdated=0;

    // Update click states to set all up to the clicked index to true, rest to false
    if(index+1===level){
      setClickStates([false,false,false,false,false]);
      setLevel(0);
      levelUpdated=0;
    }
    else{
      const newClickStates = clickStates.map((_, i) => i <= index);
      setClickStates(newClickStates);
          // Update the level based on the clicked id
      setLevel(index + 1);
      levelUpdated=index+1;
    }

    // Update the array to add or update the title and level
    setArray((prevArray) => {
      const existingItemIndex = prevArray.findIndex(item => item.title === title);

      if (existingItemIndex !== -1) {
        // Title exists, so update the level of the existing item
        return prevArray.map((item, i) =>
          i === existingItemIndex ? { ...item, level: levelUpdated } : item
        );
      } else {
        // Title doesn't exist, so add a new item with title and level
        return [...prevArray, { title, level: levelUpdated }];
      }
    });
  };

  return (
    <div className="taste-card-container">
      <p className="taste-card-title">{title}</p>
      <div className="taste-card-image-container">
        {[1, 2, 3, 4, 5].map((id) => (
          <img
            key={id}
            id={id}
            onClick={() => handleClick(id.toString())}
            className={`taste-card-image ${clickStates[id - 1] ? 'clicked' : ''}`}
            src={image}
            alt={`Taste level ${id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TasteCard;
