import React from 'react'
import './Home.css'
import MyProfile from './MyProfile';
import Recommendation from './Recommendation';
import AIAssistantBar from './AIAssistantBar';
import SideWindow from './SideWindow';

export default function Home() {

  const today = new Date();
  const formattedDate = today.toLocaleDateString()

  const getMealTime = () => {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)

    if (currentHour >= 5 && currentHour < 11) {
      return 'Breakfast Time';
    } else if (currentHour >= 11 && currentHour < 17) {
      return 'Lunch Time';
    } else if (currentHour >= 17 && currentHour < 22) {
      return 'Dinner Time';
    } else {
      return ''; // Late night or early morning snack
    }
  };

  return (
    <div className='homePageLayout'>
      <div className='mainPage'>
        <div className='headerContainer'>
          <div className='header'>
            <h1>Hi, Annie</h1>
            <h2>{formattedDate}</h2>
          </div>
          <div className='subHeader'>
            <h3>Welcome Back!</h3>
            <h3>{getMealTime()}</h3>
          </div>
        </div>
        <div className='myProfile'>
          <MyProfile></MyProfile>
        </div>
        <div className='recommendation'>
          <Recommendation></Recommendation>
        </div>
        <div className='aiAssistantBar'>
          <AIAssistantBar></AIAssistantBar>
        </div>
      </div>
      <div className='sideWindowLayout'>
        <SideWindow></SideWindow>
      </div>
    </div>
  )
}
