
import React, { useState, useEffect } from 'react';

import './RecommendationCard.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { generateFoodImage } from '../apis/foodImageApi';

export default function RecommendationCard({src, prompt="Delicious eggplant casserole" }) {
  const [imageSrc, setImageSrc] = useState(src);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Fetch the image dynamically
  useEffect(() => {
    const fetchImage = async () => {
      const cachedImage = localStorage.getItem(prompt); // Check local storage
      if (cachedImage) {
        setImageSrc(cachedImage); // Use cached image
        setLoading(false);
      } else {
        try {
          const generatedImage = await generateFoodImage(prompt);
          setImageSrc(generatedImage); // Update with the fetched image
          localStorage.setItem(prompt, generatedImage); // Cache the image
        } catch (error) {
          console.error('Error fetching image:', error.message);
          setImageSrc(src); // Fallback to default if API fails
        } finally {
          setLoading(false);
        }
      }
    };

    if (!src) {
      fetchImage();
    } else {
      setLoading(false); // If `src` is provided, skip fetching
    }
  }, [src, prompt]);


  return (
    <div className='recommendationCardContainer'>
      <div className='recommendationCardImgBox'>
        {loading ? (
          <p>Loading..</p>
        ) : (
          <img
            className="recommendationCardImg"
            src={imageSrc}
            alt={prompt}
            onError={(e) => {
              e.target.style.display = 'none'; // Hide if the image fails
            }}
          />
        )}
      
      </div>
      <div className='recommendationCardInfo'>
        <div className='recommendationCardHeader'>
          <h3>{prompt}</h3>
          <div>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon></MoreHorizIcon>
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
              <MenuItem onClick={handleClose}>Replace Breakfast</MenuItem>
              <MenuItem onClick={handleClose}>Replace Lunch</MenuItem>
              <MenuItem onClick={handleClose}>Replace Dinner</MenuItem>
            </Menu>
          </div>
        </div>
        <div className='preparationTimeBox'>
            <div className='preparationTimeLogo'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_59_6158)">
                        <path d="M10.0001 4.99984V9.99984L13.3334 11.6665M18.3334 9.99984C18.3334 14.6022 14.6025 18.3332 10.0001 18.3332C5.39771 18.3332 1.66675 14.6022 1.66675 9.99984C1.66675 5.39746 5.39771 1.6665 10.0001 1.6665C14.6025 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_59_6158">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <h4>20 min</h4>
        </div>
        <p>Eggplant, minced pork,  green onion, garlic, chili pepper</p>
      </div>
    </div>
  )
}
