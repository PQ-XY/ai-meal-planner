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
  // const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));

  // Create an array of dates from today to the next 7 days
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today); // Clone the start date
    date.setDate(today.getDate() + i); // Add `i` days to the Sunday
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

  console.log(weekDatesArray)

  // Get the 7 days array
  function getNext7Days() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay(); // Get the current day (0-6, where 0 is Sunday)
    
    // Generate an array of 7 days starting with today
    const next7Days = Array.from({ length: 7 }, (_, i) => daysOfWeek[(today + i) % 7]);
  
    return next7Days;
  }

  const next7Days = getNext7Days()


export default function BasicTabs() {

  // const today = new Date();
  // console.log(today)
  // const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  // console.log(formattedDate)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  //state for data for re-render
  const[mealData, setMealData] = React.useState(()=> {
    const savedData = localStorage.getItem('mealPlanResult');
    return savedData ? JSON.parse(savedData) : {};
  });

  //delete the meal card 
  const handle_deleteMeal = (day, mealTime) => {

    const updatedData = {...mealData}

    if (updatedData[day] && updatedData[day][mealTime]) {
      delete updatedData[day][mealTime];
      console.log(updatedData[day]);
      setMealData(updatedData);
      localStorage.setItem("mealPlanResult", JSON.stringify(updatedData));
    }
  };

  //replace the meal card 
  const handel_regenerateMeal = (day, mealTime) => {

    const updatedData = {...mealData}

    //re-generate a new meal object(new api call)
    const newMealObject = {
      meal:mealTime,
      mealName: "Grilled Salmon",
      calories: 500,
      carbs:20,
      fat: 12,
      protein:10,
      cookTime:"",
      ingredients: ["Salmon", "Garlic", "Butter"],
      steps:["step 1: Pat the salmon fillet dry with paper towels.",
            "step 2: For a more intense flavor, marinate the salmon in the olive oil, lemon juice, herbs, garlic powder, salt, and pepper for at least 30 minutes or up to overnight in the refrigerator.",
            "step 3: Heat a grill to medium-high heat. ",
            "step 4: Place the marinated salmon fillet skin-side down on the hot grill.",
            "step 5: Grill for 5-7 minutes per side, or until cooked through and flakes easily with a fork.",
            "step 6: Use a meat thermometer to ensure the salmon reaches an internal temperature of 145°F (63°C) for safety.",
            "step 7: emove the salmon from the grill and let it rest for 2-3 minutes before serving.",
            "step 8: Flake the cooked salmon and serve on a plate with your favorite sides.",
      ]
    };

    if (updatedData[day] && updatedData[day][mealTime]) {
      updatedData[day][mealTime] = newMealObject;
      setMealData(updatedData);
      localStorage.setItem("mealPlanResult", JSON.stringify(updatedData));
    }

  };

  //test data format
  // const datas = allDatas()
  // console.log(datas)

  // const firstDayMeals = datas.filter(meal => meal.date === weekDatesArray[0])
  // const secondDayMeals = datas.filter(meal => meal.date === weekDatesArray[1])
  // const thirdDayMeals = datas.filter(meal => meal.date === weekDatesArray[2])
  // const fourthDayMeals = datas.filter(meal => meal.date === weekDatesArray[3])
  // const fifthDayMeals = datas.filter(meal => meal.date === weekDatesArray[4])
  // const sixthDayMeals = datas.filter(meal => meal.date === weekDatesArray[5])
  // const seventhDayMeals = datas.filter(meal => meal.date === weekDatesArray[6])
  
  console.log(localStorage.getItem('mealPlanResult'))
  // const datas = JSON.parse(localStorage.getItem('mealPlanResult'))

  const firstDayMeals = Object.entries(mealData['Day 1'])
  console.log(typeof firstDayMeals)
  console.log(firstDayMeals)

  const secondDayMeals = Object.entries(mealData['Day 2'])
  const thirdDayMeals = Object.entries(mealData['Day 3'])
  const fourthDayMeals = Object.entries(mealData['Day 4'])
  const fifthDayMeals = Object.entries(mealData['Day 5'])
  const sixthDayMeals = Object.entries(mealData['Day 6'])
  const seventhDayMeals = Object.entries(mealData['Day 7'])

  return (
    <Box sx={{ width: '100%'}}>
      <Box>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[0]}</span>
            <span>{next7Days[0]}</span>
          </div>} {...a11yProps(0)}/>
          <StyledTab  label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[1]}</span>
            <span>{next7Days[1]}</span>
          </div>} {...a11yProps(1)} /> 
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[2]}</span>
            <span>{next7Days[2]}</span>
          </div>} {...a11yProps(2)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[3]}</span>
            <span>{next7Days[3]}</span>
          </div>} {...a11yProps(3)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[4]}</span>
            <span>{next7Days[4]}</span>
          </div>} {...a11yProps(4)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[5]}</span>
            <span>{next7Days[5]}</span>
          </div>} {...a11yProps(5)} />
          <StyledTab label={<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <span>{weekDatesArray[6]}</span>
            <span>{next7Days[6]}</span>
          </div>} {...a11yProps(6)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='MealplanCardDialogBox'>
          {firstDayMeals.map((meal,index) => (<MealplanCardDialog key={index} day={'Day 1'} meal={meal} onDelete={handle_deleteMeal} onGenerate={handel_regenerateMeal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='MealplanCardDialogBox'>
          {secondDayMeals.map((meal,index) => (<MealplanCardDialog key={index} day={'Day 2'} meal={meal} onDelete={handle_deleteMeal} onGenerate={handel_regenerateMeal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='MealplanCardDialogBox'>
          {thirdDayMeals.map((meal,index) => (<MealplanCardDialog key={index} day={'Day 3'} meal={meal} onDelete={handle_deleteMeal} onGenerate={handel_regenerateMeal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className='MealplanCardDialogBox'>
          {fourthDayMeals.map((meal,index) => (<MealplanCardDialog key={index} day={'Day 4'} meal={meal} onDelete={handle_deleteMeal} onGenerate={handel_regenerateMeal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className='MealplanCardDialogBox'>
          {fifthDayMeals.map((meal,index) => (<MealplanCardDialog key={index} day={'Day 5'} meal={meal} onDelete={handle_deleteMeal} onGenerate={handel_regenerateMeal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <div className='MealplanCardDialogBox'>
          {sixthDayMeals.map((meal,index) => (<MealplanCardDialog key={index} day={'Day 6'} meal={meal} onDelete={handle_deleteMeal} onGenerate={handel_regenerateMeal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <div className='MealplanCardDialogBox'>
          {seventhDayMeals.map((meal,index) => (<MealplanCardDialog key={index} day={'Day 7'} meal={meal} onDelete={handle_deleteMeal} onGenerate={handel_regenerateMeal}></MealplanCardDialog>))}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
