import React, { useState, useEffect } from 'react';
import './RecommendationCard.css';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { generateFoodImage } from '../apis/foodImageApi';
import baseImg5 from '../assets/foodImgs/img_5.jpg';

export default function RecommendationCard({ meal, onReplaceMeal }) {
  const [imageSrc, setImageSrc] = useState(meal.mealImg || baseImg5); // Use provided meal image or placeholder
  const [loading, setLoading] = useState(false); // Track loading state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const cachedImage = localStorage.getItem(meal.mealName); // Check if the image is cached

    if (cachedImage) {
      // Use cached image if it exists
      setImageSrc(cachedImage);
    } else {
      // Otherwise, fetch the image from the API
      setLoading(true); // Start loading
      generateFoodImage(meal.mealName)
        .then((res) => {
          if (res && typeof res === 'string') {
            setImageSrc(res); // Update image source with the API result
            localStorage.setItem(meal.mealName, res); // Cache the image in localStorage
          }
        })
        .catch(() => {
          console.error('Failed to generate food image');
        })
        .finally(() => {
          setLoading(false); // End loading
        });
    }
  }, [meal.mealName]); // Re-run if the meal name changes

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='recommendationCardContainer'>
      <div className='recommendationCardImgBox'>
        {loading ? (
          <div className="loadingPlaceholder">Loading...</div> // Placeholder while loading
        ) : (
          <img className='recommendationCardImg' src={imageSrc} alt={meal.mealName} />
        )}
      </div>
      <div className='recommendationCardInfo'>
        <div className='recommendationCardHeader'>
          <h3>{meal?.mealName?.replace(/\s*\([^)]*\)/g, '') || 'No Meal Name Availabe'}</h3>
          <div>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => { handleClose(); onReplaceMeal("Day 1", "Breakfast", meal); }}>Replace Breakfast</MenuItem>
              <MenuItem onClick={() => { handleClose(); onReplaceMeal("Day 1", "Lunch", meal); }}>Replace Lunch</MenuItem>
              <MenuItem onClick={() => { handleClose(); onReplaceMeal("Day 1", "Dinner", meal); }}>Replace Dinner</MenuItem>
            </Menu>
          </div>
        </div>
        <div className='preparationTimeBox'>
          <div className='preparationTimeLogo'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_59_6158)">
                <path d="M10.0001 4.99984V9.99984L13.3334 11.6665M18.3334 9.99984C18.3334 14.6022 14.6025 18.3332 10.0001 18.3332C5.39771 18.3332 1.66675 14.6022 1.66675 9.99984C1.66675 5.39746 5.39771 1.6665 10.0001 1.6665C14.6025 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_59_6158">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4>{meal.cookTime}</h4>
        </div>
        <div className='mealTotalCalories'>
          <p>Calories: {meal.calories} Cal</p>
        </div>
        <div className='mealNutritionFacts'>
          <p>Carbohydrate: {meal.carbs}g</p>
          <p>Protein: {meal.protein}g</p>
          <p>Fat: {meal.fat}g</p>
        </div>
      </div>
    </div>
  );
}
