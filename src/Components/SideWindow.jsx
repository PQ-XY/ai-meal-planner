import React from 'react'
import './SideWindow.css'
import MealDialog from './MealDialog'
import { Link } from 'react-router-dom'
import allDatas from '../data/test_data'

export default function SideWindow({mealData}) {

  //get the current weekday today
  // const getDayofWeek = () => {
  //   const today = new Date();
  //   const dayOfWeek = today.getDay();
  
  //   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   return days[dayOfWeek]
  // }
  // const currentDay = getDayofWeek();

  // const today = new Date();
  // const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  // const todayMeals = datas.filter(meal => meal.date === formattedDate)

  const firstDayMeals = Object.entries(mealData['Day 1'])

  return (
    <div className='sideWindowBox'>
      <div className='sideWindowHeader'>
        <div className='sideWindowHeaderLogo'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.49004 23.4127C4.60671 31.2285 11.5734 37.5002 20 37.5002C28.4267 37.5002 35.3934 31.2285 36.51 23.4127C36.6884 22.1643 35.7292 21.126 34.4692 21.066C32.2092 20.9593 27.8717 20.8335 20 20.8335C12.1292 20.8335 7.79171 20.9593 5.53087 21.0668C4.27171 21.1252 3.31171 22.1643 3.48921 23.4127H3.49004Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31.7677 25C30.7451 27.8077 28.769 30.1672 26.1843 31.6667" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5233 16.1544C10.9466 15.5777 11.1616 14.6594 11.6666 14.0185C13.2433 12.0185 16.9283 7.44435 20.6966 3.48352C21.595 2.53936 22.9358 1.97519 23.9816 2.75269C24.3405 3.01929 24.6584 3.33712 24.925 3.69602C25.7016 4.74269 25.1383 6.08352 24.1941 6.98186C20.2333 10.7502 15.6591 14.4352 13.6591 16.0119C13.0183 16.5169 12.1008 16.7319 11.5233 16.1544Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3158 16.616C20.9074 15.9094 21.3524 15.0777 22.0066 14.5902C24.0474 13.0652 28.7899 9.60187 33.4558 6.75021C34.5674 6.07104 36.0083 5.87437 36.8174 6.89521C36.9466 7.05771 37.0724 7.24187 37.1924 7.44937C37.3124 7.65687 37.4083 7.85771 37.4841 8.05104C37.9641 9.26271 37.0733 10.4119 35.9283 11.0344C31.1274 13.6502 25.7558 16.026 23.4158 17.031C22.6658 17.3527 21.7241 17.3227 21.3158 16.616Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <h2>Today's Meal</h2>
      </div>
      <div className='sideWindowCardsBox'>{
          firstDayMeals.map((meal, index)=>(
          <MealDialog key={index}  day={'Day 1'} meal={meal}></MealDialog>
        ))
        }
      </div>
      <div>
        <Link to='/app/meals' style={{p:0, textDecoration:'none'}}>
          <button className='goToMealsButt'>Go to Meals</button>
        </Link>
      </div>
    </div>
  )
}
