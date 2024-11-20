import React from 'react'
import './FunctionCard.css'

const FunctionCard = ({title,description1,description2,image}) => {
  return (
    <div className='card-container'>
      <div className='card-image-container'>
        <img src={image} className='card-image'></img>
      </div>
      <div className='card-bottom'>
          <div className='card-bottom-title'>
              <p>
                {title}
              </p>
          </div>
          <div>
            <div className='card-bottom-paragraph'>
                <span className='card-bottom-description' style={{ marginRight: '8px' }}>·</span>
                <p className='card-bottom-description'>
                {description1}
                </p>
            </div>
            <div className='card-bottom-paragraph'>
                <span className='card-bottom-description' style={{ marginRight: '8px' }}>·</span>
                <p className='card-bottom-description'>
                {description2}
                </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FunctionCard
