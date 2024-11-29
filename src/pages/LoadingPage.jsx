import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import logo from '../assets/images/logo.png';
import './LoadingPage.css';
import { mealPlanGenerator } from '../Components/PlannerHelper'; // Ensure this path is correct

const LoadingPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const generateMealPlan = async () => {
      try {
        //const mealPlan = 1; // Replace with actual call to mealPlanGenerator
        console.log(localStorage.getItem('mealsArray'));
        console.log(localStorage.getItem('dietArray'));
        console.log(localStorage.getItem('allergyArray'));
        console.log(localStorage.getItem('cuisineArray'));
        console.log(localStorage.getItem('kitArray'));
        console.log(localStorage.getItem('tasteArray'));
        const flavorArray = JSON.parse(localStorage.getItem('tasteArray'))
        const SaltyFlavor = flavorArray.find((flavor) => flavor.title === "Salty")['level'];
        const SourFlavor = flavorArray.find((flavor) => flavor.title === "Sour")['level'];
        const SweetFlavor = flavorArray.find((flavor) => flavor.title === "Sweet")['level'];
        const SpicyFlavor = flavorArray.find((flavor) => flavor.title === "Spicy")['level'];
        const tasteRatings = [SweetFlavor, SourFlavor, SpicyFlavor, SaltyFlavor];
        let userInfo = {
          mealTypes: localStorage.getItem('mealsArray'),
          numDays: "7", // number of days, e.g. 7 days
          allergies: localStorage.getItem('allergyArray'), // any allergies or restrictions, e.g., peanuts, gluten-free, lactose intolerance
          preference: localStorage.getItem('cuisineArray'), // preferred cuisine type(s), e.g., Asian, Mediterranean, American, Italian
          kitchenware: localStorage.getItem('kitArray'), // available kitchen equipment, e.g., wok, fry pan, air fryer, oven, blender, pressure cooker
          tasteRating: tasteRatings // rating for sweetness, sour, spicy, and salty preference, ranging from 1 to 5
        }
        console.log(userInfo);
        const mealPlan = await mealPlanGenerator(userInfo);
        console.log('Meal plan generated:', mealPlan);
        localStorage.setItem('mealPlanResult', JSON.stringify(mealPlan));
        // Uncomment and use when ready:
        navigate('/app/home');
      } catch (error) {
        console.error('Error generating meal plan:', error);
      }
    };

    generateMealPlan();
  }, []); // Dependencies: Re-run only if `navigate` changes

  return (
    <div className="loading-container">
      <div className="loading-container-inner">
        <img src={logo} alt="Logo" />
        <p className="loading-text">Loading ...</p>
      </div>
      <div>
        <p className="info-text">Your meal plan will be ready soon!</p>
      </div>
    </div>
  );
};

export default LoadingPage;