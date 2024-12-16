import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import './AIAssistantBar.css'


export default function AIAssistantBar() {
  return (
    <Box className='aiAssitantContainer'>
        <div className='aiAssistantLogo'>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3666 3.41167C32.2041 3.59333 33.5549 4.96417 33.7191 6.80333C33.9366 9.25667 34.1666 13.5 34.1666 20.5C34.1666 27.5 33.9366 31.7442 33.7183 34.1958C33.5549 36.0358 32.2041 37.4067 30.3666 37.5883C28.2799 37.795 24.9599 38 19.9999 38C15.0399 38 11.7199 37.795 9.63325 37.5883C7.79575 37.4067 6.44492 36.0358 6.28159 34.1967C6.06325 31.7442 5.83325 27.5 5.83325 20.5C5.83325 13.5 6.06325 9.25583 6.28159 6.80333C6.44492 4.96417 7.79575 3.59333 9.63325 3.41167C11.7199 3.205 15.0399 3 19.9999 3C24.9599 3 28.2799 3.205 30.3666 3.41167Z" stroke="#E8EDD5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M34.1666 20.5H5.83325" stroke="#E8EDD5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 10.5V13.8333" stroke="#E8EDD5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 27.1665V30.4998" stroke="#E8EDD5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <Paper
        component="form"
        sx={{ p: '0px 20px', display: 'flex', alignItems: 'center', width: 809, height:80, borderRadius:100 }}
        >
        <InputBase
            sx={{ ml: 1, flex: 1}}
            placeholder="No Idea? Ask app name!"
            inputProps={{ 'aria-label': 'No Idea? Ask app name!' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        </Paper>
    </Box>
  );
}