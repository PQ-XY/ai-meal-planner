import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './MyProfile.css'
import { Link } from 'react-router-dom'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#94B06E',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function MyProfile() {

  //get the tasteArray data from localStorage
  const savedTastes = localStorage.getItem('tasteArray')
  console.log(savedTastes)

  const flavorArray = JSON.parse(savedTastes)

  const SaltyFlavor = flavorArray.find((flavor) => flavor.title === "Salty");
  const SourFlavor = flavorArray.find((flavor) => flavor.title === "Sour");
  const SweetFlavor = flavorArray.find((flavor) => flavor.title === "Sweet");
  const SpicyFlavor = flavorArray.find((flavor) => flavor.title === "Spicy");

  //get the allergyArray data from localStorage
  const savedAllergy = localStorage.getItem('allergyArray');
  console.log(savedAllergy)

  const allergyArray = JSON.parse(savedAllergy)

  //get the dietArray data from localStorage
  const savedDiets = localStorage.getItem('dietArray');
  console.log(savedDiets)

  const dietArray = JSON.parse(savedDiets)

  //get the mealsArray data from localStorage
  const savedMeals = localStorage.getItem('mealsArray');
  console.log(savedMeals)

  const mealsArray = JSON.parse(savedMeals)

  //get the cuisineArray data from localStorage
  const savedCuisines = localStorage.getItem('cuisineArray');
  console.log(savedCuisines)

  const cuisineArray = JSON.parse(savedCuisines)

  //get the kitArray data from localStorage
  const savedKits = localStorage.getItem('kitArray');
  console.log(savedKits)

  const kitArray = JSON.parse(savedKits)



  return (
    <div className='myProfileContainer'>
      <Accordion square={true} sx={{ border:'none', boxShadow: 'none', borderRadius: '18px' }}>
        <AccordionSummary
          expandIcon={<MenuOutlinedIcon style={{color:'#94B06E'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='header'>
            <div className='myProfileLogo'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.8408 2.61593C30.0408 4.9926 34.5133 11.5451 34.9633 21.6643C35.01 22.7118 34.5 23.7043 33.5483 24.1459C32.8692 24.4609 31.9508 24.8193 30.7942 25.1243C30.5899 25.176 30.4118 25.3008 30.2935 25.4752C30.1752 25.6495 30.125 25.8612 30.1525 26.0701L31.1742 33.2184C31.4575 35.2043 30.68 36.9834 28.745 37.5159C26.9367 38.0143 25 36.8126 25 34.9359V3.7551C25 2.6851 25.9817 1.97843 26.8408 2.61593Z" stroke="#94B06E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.2881 4.465C18.6715 6.73 19.2081 10.6875 19.1648 14.9133C19.1423 17.0942 17.6856 19.0483 15.3956 19.5617C14.9231 19.6675 14.4181 19.7633 13.8915 19.8375L15.4281 33.1542C15.6615 35.1808 14.4065 37.1683 12.3856 37.4417C12.1474 37.4767 11.9072 37.4962 11.6665 37.5C11.426 37.4961 11.1861 37.4766 10.9481 37.4417C8.92731 37.1683 7.67148 35.1808 7.90565 33.1542L9.44231 19.8375C8.93746 19.7659 8.43567 19.6742 7.93815 19.5625C5.64815 19.0483 4.19148 17.0933 4.16898 14.9125C4.12565 10.6875 4.66065 6.73083 5.04398 4.46583C5.23981 3.31167 6.24981 2.5 7.41981 2.5H15.9123C17.0831 2.5 18.0931 3.31083 18.2881 4.465Z" stroke="#94B06E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.58317 2.5L9.1665 11.6667" stroke="#94B06E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.75 2.5L14.1667 11.6667" stroke="#94B06E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>      
            </div>
            <h1>My Profile</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='myProfileDetailBoard'>
              <div className='myProfileDetailCard'>
                <h1>Taste</h1>
                <span className='myProfileRatingBox'>
                  <h4>{SaltyFlavor.title}</h4>
                  <StyledRating
                    name="customized-color"
                    defaultValue={SaltyFlavor.level}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    readOnly
                  />
                </span>
                <span className='myProfileRatingBox'>
                  <h4>{SourFlavor.title}</h4>
                  <StyledRating
                    name="customized-color"
                    defaultValue={SourFlavor.level}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    readOnly
                  />
                </span>
                <span className='myProfileRatingBox'>
                  <h4>{SweetFlavor.title}</h4>
                  <StyledRating
                    name="customized-color"
                    defaultValue={SweetFlavor.level}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    readOnly
                  />
                </span>
                <span className='myProfileRatingBox'>
                  <h4>{SpicyFlavor.title}</h4>
                  <StyledRating
                    name="customized-color"
                    defaultValue={SpicyFlavor.level}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    readOnly
                  />
                </span>
              </div>
              <div className='myProfileDetailCard'>
                <h1>Dining Habits</h1>
                <div className='myProfileDetailCardBox'>
                  <div className='myProfileDetailContainer'>
                    {mealsArray.map((item, index) => (
                          <li key={index} className='myProfileDetailItem'>
                            {item}
                          </li>
                        ))}
                  </div>
                  <div className='myProfileDetailContainer'>
                    {dietArray.map((item, index) => (
                          <li key={index} className='myProfileDetailItem'>
                            {item}
                          </li>
                        ))}
                  </div>
                  <div className='myProfileDetailContainer'>
                    {cuisineArray.map((item, index) => (
                          <li key={index} className='myProfileDetailItem'>
                            {item}
                          </li>
                        ))}
                  </div>
                  <div className='myProfileDetailContainer'>
                    {kitArray.map((item, index) => (
                          <li key={index} className='myProfileDetailItem'>
                            {item}
                          </li>
                        ))}
                  </div>
                </div>
              </div>
              <div className='myProfileDetailCard myProfileDetailCard2'>
                <div className='myProfileAllergyCard'>
                  <h1>Allergy</h1>
                  <div className='myProfileDetailContainer'>
                    {allergyArray.map((item, index) => (
                      <li key={index} className='myProfileDetailItem'>
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
                <Link to='/invest/1-1' style={{textDecoration:'none'}}>
                  <button className='myProfileEditButton'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 20.0002H21M3 20.0002H4.67454C5.16372 20.0002 5.40832 20.0002 5.63849 19.945C5.84256 19.896 6.03765 19.8152 6.2166 19.7055C6.41843 19.5818 6.59138 19.4089 6.93729 19.063L19.5 6.50023C20.3285 5.6718 20.3285 4.32865 19.5 3.50023C18.6716 2.6718 17.3285 2.6718 16.5 3.50023L3.93726 16.063C3.59136 16.4089 3.4184 16.5818 3.29472 16.7837C3.18506 16.9626 3.10425 17.1577 3.05526 17.3618C3 17.5919 3 17.8365 3 18.3257V20.0002Z" stroke="#94B06E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1>Edit</h1>
                  </button>
                </Link>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
