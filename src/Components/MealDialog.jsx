import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SideWindowCard from './SideWindowCard';
import './MealDialogs.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function MealDialogs({title, name, src}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>
        <SideWindowCard title={title} name={name} src={src}></SideWindowCard>
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
            <h1>{title}</h1>
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
                <img src={src} alt="" />
              </div>
              <div className='dishSubInfo'>
                <h3>Dishes</h3>
                <h5>{name}</h5>
              </div>
              <div className='dishSubInfo'>
                <h3>Ingredients</h3>
                <ul>
                  <li className='dishIngredients'>
                    <h4>100g</h4>
                    <h5>Rice</h5>
                  </li>
                  <li className='dishIngredients'>
                    <h4>80g</h4>
                    <h5>Beef Slices</h5>
                  </li>
                  <li className='dishIngredients'>
                    <h4>30g</h4>
                    <h5>Carrot</h5>
                  </li>
                  <li className='dishIngredients'>
                    <h4>30g</h4>
                    <h5>Cucumber</h5>
                  </li>
                  <li className='dishIngredients'>
                    <h4>30g</h4>
                    <h5>Mushroom</h5>
                  </li>
                  <li className='dishIngredients'>
                    <h4>30g</h4>
                    <h5>Bean sprouts</h5>
                  </li>
                  <li className='dishIngredients'>
                    <h4>1</h4>
                    <h5>Egg</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className='dishStepsContainer'>
              <ul className='dishSteps'>
                <li className='dishStepsHeader'>Step 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prepare vegetables
                  <ul>
                  <li className='dishStepsDetail'>Wash the vegetables and drain.</li>
                  <li className='dishStepsDetail'>Cut the carrot, mushroom, cucumber and bean sprouts into 4 cm long strips.</li>
                  </ul>
                </li>
                <li className='dishStepsHeader'>Step 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Steamed Rice
                  <ul>
                  <li className='dishStepsDetail'>Add appropriate amount of water and rice to the stone pot, bring to a boil over high heat then turn to low heat, pour a circle of oil along the edge of the pot, cover with a lid and simmer until the water is dried up and rice crust is formed.</li>
                  </ul>
                </li>
                <li className='dishStepsHeader'>Step 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blanching
                  <ul>
                  <li className='dishStepsDetail'>Boil water in a pot, add shredded carrots, shredded mushrooms and bean sprouts, remove and drain after 1 minute.</li>
                  </ul>
                </li>
                <li className='dishStepsHeader'>Step 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stir-fry
                  <ul>
                  <li className='dishStepsDetail'>Heat the pan with cold oil, add the beef and stir-fry until it changes color, set aside.</li>
                  <li className='dishStepsDetail'>In another pan, add shredded carrots, shredded mushrooms and other vegetables and stir-fry evenly.</li>
                  </ul>
                </li>
                <li className='dishStepsHeader'>Step 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Combination
                  <ul>
                  <li className='dishStepsDetail'>Put the cooked rice into the stone pot and top it with the fried vegetables and beef.</li>
                  <li className='dishStepsDetail'>Crack an egg on top and drizzle with Korean chili sauce, sesame oil, soy sauce and minced garlic.</li>
                  </ul>
                </li>
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
