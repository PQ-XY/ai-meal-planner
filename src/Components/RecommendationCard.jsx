import React from 'react'
import './RecommendationCard.css'

export default function RecommendationCard({src}) {
  return (
    <div className='recommendationCardContainer'>
      <div className='recommendationCardImgBox'>
        <img className='recommendationCardImg' src={src} alt="" />
      </div>
      <div className='recommendationCardInfo'>
        <h3>Eggplant Casserole</h3>
        <div className='preparationTimeBox'>
            <div className='preparationTimeLogo'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_59_6158)">
                        <path d="M10.0001 4.99984V9.99984L13.3334 11.6665M18.3334 9.99984C18.3334 14.6022 14.6025 18.3332 10.0001 18.3332C5.39771 18.3332 1.66675 14.6022 1.66675 9.99984C1.66675 5.39746 5.39771 1.6665 10.0001 1.6665C14.6025 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_59_6158">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <h4>20 min</h4>
        </div>
        <p>Eggplant, minced pork,  green onion, garlic, chili pepper</p>
      </div>
    </div>
  )
}
