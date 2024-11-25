import React, { useState, useEffect } from 'react';
import './AddIngredient.css';

const AddIngredient = ({ name, count, onNameChange, onCountChange }) => {
  const [inputValue, setInputValue] = useState(count); // Initial value set to count
  const [inputName, setInputName] = useState(name);

  useEffect(() => {
    onCountChange(inputValue);
  }, [inputValue]);

  useEffect(() => {
    onNameChange(inputName);
  }, [inputName]);

  const handleValueChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Ensure it's a valid number
    setInputValue(newValue);
  };

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const decrementValue = () => {
    if (inputValue > 1) {
      setInputValue(inputValue - 1);
    }
  };

  const incrementValue = () => {
    setInputValue(inputValue + 1);
  };

  return (
    <div className="ingredient-container">
      <input
        className="ingredient-name-input"
        placeholder="Enter ingredient"
        onChange={handleNameChange}
        value={inputName}
      />
      <div className="base-NumberInput-root">
        <button
          className={`base-NumberInput-decrementButton ${inputValue <= 1 ? 'disabled' : ''}`}
          onClick={decrementValue}
          disabled={inputValue === 1} // Disable the button when value is 1
        >
          -
        </button>
        <input
          className="base-NumberInput-input"
          value={inputValue}
          onChange={handleValueChange}
        />
        <button
          className="base-NumberInput-incrementButton"
          onClick={incrementValue}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddIngredient;
