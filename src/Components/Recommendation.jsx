import React from 'react'
import './Recommendation.css'
import RecommendationCard from './RecommendationCard'

export default function Recommendation() {
  return (
    <div className='recommendationContainer'>
      <div className='recommendationHeader'>
        <div className='recommendationBox'>
            <div className='recommendationLogo'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33325 25.7392C3.33325 16.9975 9.93325 10.0725 18.6749 10.005C19.5582 9.99833 20.4416 9.99833 21.3249 10.005C30.0666 10.0717 36.6666 16.9975 36.6666 25.7392V25.8342C36.6669 26.2717 36.581 26.705 36.4138 27.1093C36.2466 27.5136 36.0014 27.881 35.6921 28.1905C35.3829 28.4999 35.0157 28.7454 34.6115 28.913C34.2073 29.0805 33.7741 29.1667 33.3366 29.1667H19.9999H6.66325C6.22567 29.1667 5.79238 29.0804 5.38815 28.9129C4.98392 28.7453 4.61667 28.4997 4.30741 28.1902C3.99815 27.8806 3.75293 27.5131 3.58578 27.1087C3.41863 26.7043 3.33282 26.2709 3.33325 25.8333V25.7392Z" stroke="#94B06E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.7523 10.0383C17.1196 9.03757 16.5969 7.97138 16.1932 6.85833C15.9532 6.19667 16.2423 5.49583 16.924 5.3225C17.5832 5.15417 18.5748 5 20.0007 5C21.4273 5 22.419 5.15417 23.0765 5.3225C23.759 5.49583 24.0473 6.19667 23.8082 6.85833C23.4045 7.9714 22.8817 9.03759 22.249 10.0383" stroke="#94B06E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.57991 31.3623C2.77741 33.4357 4.65991 34.7573 6.74157 34.8257C9.35407 34.9107 13.6116 34.9998 19.9999 34.9998C26.3874 34.9998 30.6449 34.9107 33.2574 34.8248C35.3391 34.7573 37.2216 33.4357 37.4191 31.3623C37.5191 30.319 36.6949 29.4432 35.6474 29.3998C33.2882 29.3032 28.4632 29.1665 19.9999 29.1665C11.5366 29.1665 6.71157 29.3032 4.35157 29.3998C3.30491 29.4432 2.47991 30.319 2.57991 31.3623Z" stroke="#94B06E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.25 14.5835C25.25 14.6127 28.6025 16.5952 30.4167 19.5835" stroke="#94B06E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h2>Recommendation</h2>
        </div>
        <button className='regenerate'>
            Re-generate
            <div className='regenerateLogo'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.453 12.8932C20.1752 15.5031 18.6964 17.9488 16.2494 19.3616C12.1839 21.7088 6.98539 20.3158 4.63818 16.2503L4.38818 15.8173M3.54613 11.1071C3.82393 8.49723 5.30272 6.05151 7.74971 4.63874C11.8152 2.29153 17.0137 3.68447 19.3609 7.74995L19.6109 8.18297M3.49316 18.0662L4.22521 15.3341L6.95727 16.0662M17.0424 7.93413L19.7744 8.66618L20.5065 5.93413" stroke="#94B06E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </button>
      </div>
      <h3 className='recommendationSub'>We have generated new recipes based on your taste and previous meals, come and try!</h3>
      <div className='recommendationCardsBox'>
        <RecommendationCard></RecommendationCard>
        <RecommendationCard></RecommendationCard>
        <RecommendationCard></RecommendationCard>
      </div>
    </div>
  )
}
