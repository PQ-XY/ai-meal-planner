import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MealCard from './MealCard';
import { styled } from '@mui/material/styles';
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

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#94B06E',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(24),
    marginRight: theme.spacing(1),
    color: '#94B06E',
    fontFamily:'Instrument Sans',
    '&.Mui-selected': {
      color: '#688B39',
      fontWeight:700,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#688B39',
    },
  }),
);

function getWeekDates() {
  const today = new Date();

  // Find Sunday (start of the week)
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));

  // Create an array of dates from Sunday to Saturday
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek); // Clone the start date
    date.setDate(startOfWeek.getDate() + i); // Add `i` days to the Sunday
    return date;
  });

  // Format the dates as MM/DD
  const formatDate = (date) => {
    const month = date.getMonth() + 1; // Months are 0-indexed
    const day = date.getDate();
    return `${month}/${day}`;
  };

  return weekDates.map(formatDate);
}

  // Get the current week's dates
  const weekDatesArray = getWeekDates();

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[0]}</span>
            <span>Sunday</span>
          </div>} {...a11yProps(0)}/>
          <StyledTab  label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[1]}</span>
            <span>Monday</span>
          </div>} {...a11yProps(1)} /> 
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[2]}</span>
            <span>Tuesday</span>
          </div>} {...a11yProps(2)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[3]}</span>
            <span>Wednesday</span>
          </div>} {...a11yProps(3)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[4]}</span>
            <span>Thursday</span>
          </div>} {...a11yProps(4)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[5]}</span>
            <span>Friday</span>
          </div>} {...a11yProps(5)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[6]}</span>
            <span>Saturday</span>
          </div>} {...a11yProps(6)} />
        </StyledTabs>
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
