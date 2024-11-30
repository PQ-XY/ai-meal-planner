import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './MealplanCardDialog.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import baseImg5 from '../assets/foodImgs/img_5.jpg'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function MealplanCardDialog({day, meal, onDelete}) {

  console.log(typeof day)
  console.log(meal)
  const mealTime = meal[0]
  console.log(typeof mealTime)
  const mealDetails = meal[1]

  const AimUrl = baseImg5; // Default to baseImg5
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openOption = Boolean(anchorEl);
  const handlePopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopupClose = () => {
    setAnchorEl(null);
  };

 
  return (
    <React.Fragment>
      <div className='mealCardContainer'>
      <div className='mealCardImgBox' onClick={handleClickOpen}>
        <img className='mealCardImg' src={AimUrl} alt="" />
      </div>
      <div className='mealCardInfo'>
        <div className='mealCardHeader'>
          <h3 onClick={handleClickOpen}>{mealDetails.mealName.replace(/\s*\([^)]*\)/g, '')}</h3>
          <div>
            <IconButton
              id="basic-button"
              aria-controls={openOption ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openOption ? 'true' : undefined}
              onClick={handlePopupClick}
            >
              <MoreHorizIcon></MoreHorizIcon>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openOption}
              onClose={handlePopupClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={()=> {handlePopupClose(); onDelete(day, mealTime)}}>Delete</MenuItem>
              <MenuItem onClick={handlePopupClose}>Regenerate</MenuItem>
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
            <h4>{mealDetails.cookTime}</h4>
        </div>
        <div className='mealTotalCalories'>
          <p>Calories: {mealDetails.calories} Cal</p>
        </div>
        <div className='mealNutritionFacts'>
            <p>Carbohydrate: {mealDetails.carbs}g</p>
            <p>Protein: {mealDetails.protein}g</p>
            <p>Fat: {mealDetails.fat}g</p>
        </div>
      </div>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={'xl'}
        maxWidth={'xl'}
        scroll='paper'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <div className='DialogHeaderContainer'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.49004 23.4127C4.60671 31.2285 11.5734 37.5002 20 37.5002C28.4267 37.5002 35.3934 31.2285 36.51 23.4127C36.6884 22.1643 35.7292 21.126 34.4692 21.066C32.2092 20.9593 27.8717 20.8335 20 20.8335C12.1292 20.8335 7.79171 20.9593 5.53087 21.0668C4.27171 21.1252 3.31171 22.1643 3.48921 23.4127H3.49004Z" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M31.7677 25C30.7451 27.8077 28.769 30.1672 26.1843 31.6667" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5233 16.1544C10.9466 15.5777 11.1616 14.6594 11.6666 14.0185C13.2433 12.0185 16.9283 7.44435 20.6966 3.48352C21.595 2.53936 22.9358 1.97519 23.9816 2.75269C24.3405 3.01929 24.6584 3.33712 24.925 3.69602C25.7016 4.74269 25.1383 6.08352 24.1941 6.98186C20.2333 10.7502 15.6591 14.4352 13.6591 16.0119C13.0183 16.5169 12.1008 16.7319 11.5233 16.1544Z" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3158 16.616C20.9074 15.9094 21.3524 15.0777 22.0066 14.5902C24.0474 13.0652 28.7899 9.60187 33.4558 6.75021C34.5674 6.07104 36.0083 5.87437 36.8174 6.89521C36.9466 7.05771 37.0724 7.24187 37.1924 7.44937C37.3124 7.65687 37.4083 7.85771 37.4841 8.05104C37.9641 9.26271 37.0733 10.4119 35.9283 11.0344C31.1274 13.6502 25.7558 16.026 23.4158 17.031C22.6658 17.3527 21.7241 17.3227 21.3158 16.616Z" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
            <h1>{mealDetails.meal}</h1>
          </div>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <div className='mealDialogsContainer'>
            <div className='dishInfo'>
              <div className='dishImgContainer'>
                <img src={AimUrl} alt="" />
              </div>
              <div className='dishSubInfo'>
                <h3>Dishes</h3>
                <h5>{mealDetails.mealName.replace(/\s*\([^)]*\)/g, '')}</h5>
              </div>
              <div className='dishSubInfo'>
                <h3>Ingredients</h3>
                <ul>
                  {mealDetails.ingredients.map((ingredient, index) => (
                    <li key={index} className='dishIngredients'><h5>{ingredient}</h5></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='dishStepsContainer'>
              <ul className='dishSteps'>
                {mealDetails.steps.map((step, index)=>(
                  <li key={index} className='dishStepsHeader'>Step {index + 1}
                    <li className='dishStepsDetail'>{step}</li>
                  </li>
                ))}
              </ul>
            </div>
          </div>  
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <button onClick={handleClose} className='dishCancelButton'>
            Cancel
          </button>
          <button onClick={handleClose} className='dishFinishedButton'>
            Finished
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}