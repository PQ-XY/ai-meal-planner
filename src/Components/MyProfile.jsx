import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import './MyProfile.css'

export default function MyProfile() {
  return (
    <div className='myProfileContainer'>
      <Accordion square={true} sx={{ borderRadius: '18px' }}>
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

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
