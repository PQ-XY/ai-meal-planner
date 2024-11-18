import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MealCard from './MealCard';
import './BasicTabs.css'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Sunday" {...a11yProps(0)}      
          sx={{
              color: value === 0 ? '#94B06E' : '#688B39', // Change color for selected and unselected states
              fontFamily: 'Instrument Sans', // Set custom font family
              fontWeight: value === 0 ? 'bold' : 'normal', // Optional: bold for selected tab
            }}/>
          <Tab label="Monday" {...a11yProps(1)} /> 
          <Tab label="Tuesday" {...a11yProps(2)} />
          <Tab label="Wednesday" {...a11yProps(3)} />
          <Tab label="Thursday" {...a11yProps(4)} />
          <Tab label="Friday" {...a11yProps(5)} />
          <Tab label="Saturday" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='mealCardBox'>
          <MealCard src={'https://www.sidechef.com/recipe/0fb38edd-6c28-434a-a14c-e930e69115d4.jpg?d=1408x1120'}></MealCard>
          <MealCard src={'https://i.redd.it/roast-pork-belly-and-fatty-cha-siu-on-rice-if-i-could-only-v0-6e9zxs0wh7kd1.jpg?width=6000&format=pjpg&auto=webp&s=1cacbd01f211d137a7ea434e753f224c8ecfa0da'}></MealCard>
          <MealCard src={'https://hikarimiso.com/wp-content/uploads/2024/05/Trimmed_03_Miso-Ramen_02_M.jpg'}></MealCard>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className='mealCardBox'>
          <MealCard src={'https://hips.hearstapps.com/hmg-prod/images/ghk010124scrambledeggsthreeways-65942928cddc1.jpg?crop=0.356xw:0.801xh;0.313xw,0&resize=980:*'}></MealCard>
          <MealCard src={'https://www.recipetineats.com/tachyon/2024/08/Cinnamon-breakfast-muffins-morning-glory-muffins_7-1.jpg'}></MealCard>
          <MealCard src={'https://www.pumpkinnspice.com/wp-content/uploads/2016/03/easy-breakfast-quesadillas-13-1024x683.jpg'}></MealCard>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='mealCardBox'>
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className='mealCardBox'>
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <div className='mealCardBox'>
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <div className='mealCardBox'>
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <div className='mealCardBox'>
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
