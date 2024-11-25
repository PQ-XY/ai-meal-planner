import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MealplanCardDialog from './MealplanCardDialog';
import { styled } from '@mui/material/styles';
import './BasicTabs.css'
import allDatas from '../data/test_data';

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
      {value === index && <Box sx={{pt:6}}>{children}</Box>}
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
  const today = new Date();
  console.log(today)
  const dayOfWeek = today.getDay(); 
  console.log(dayOfWeek)

  const [value, setValue] = React.useState(dayOfWeek);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //test data format
  const datas = allDatas()
  console.log(datas)

  const sundayMeals = datas.filter(meal => meal.day ==='Sunday')
  const mondayMeals = datas.filter(meal => meal.day ==='Monday')
  const tuesdayMeals = datas.filter(meal => meal.day ==='Tuesday')
  const wednesdayMeals = datas.filter(meal => meal.day ==='Wednesday')
  const thursdayMeals = datas.filter(meal => meal.day ==='Thursday')
  const fridayMeals = datas.filter(meal => meal.day ==='Friday')
  const saturdayMeals = datas.filter(meal => meal.day ==='Saturday')

  return (
    <Box sx={{ width: '100%'}}>
      <Box>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[0]}</span>
            <span>Sunday</span>
          </div>} value={0} {...a11yProps(0)}/>
          <StyledTab  label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[1]}</span>
            <span>Monday</span>
          </div>} value={1} {...a11yProps(1)} /> 
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[2]}</span>
            <span>Tuesday</span>
          </div>} value={2} {...a11yProps(2)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[3]}</span>
            <span>Wednesday</span>
          </div>} value={3} {...a11yProps(3)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[4]}</span>
            <span>Thursday</span>
          </div>} value={4} {...a11yProps(4)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[5]}</span>
            <span>Friday</span>
          </div>} value={5} {...a11yProps(5)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[6]}</span>
            <span>Saturday</span>
          </div>} value={6} {...a11yProps(6)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='MealplanCardDialogBox'>
          {sundayMeals.map((meal,index) => (<MealplanCardDialog key={index} meal={meal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='MealplanCardDialogBox'>
          {mondayMeals.map((meal,index) => (<MealplanCardDialog key={index} meal={meal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='MealplanCardDialogBox'>
          {tuesdayMeals.map((meal,index) => (<MealplanCardDialog key={index} meal={meal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className='MealplanCardDialogBox'>
          {wednesdayMeals.map((meal,index) => (<MealplanCardDialog key={index} meal={meal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className='MealplanCardDialogBox'>
          {thursdayMeals.map((meal,index) => (<MealplanCardDialog key={index} meal={meal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <div className='MealplanCardDialogBox'>
          {fridayMeals.map((meal,index) => (<MealplanCardDialog key={index} meal={meal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <div className='MealplanCardDialogBox'>
          {saturdayMeals.map((meal,index) => (<MealplanCardDialog key={index} meal={meal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
