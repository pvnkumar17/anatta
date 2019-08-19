import React from 'react';
import './rating.css';

const Rating = ({rating, max, reviews}) => (
  <div className='rating-container'>
    <div className='rating'>
      {
        [...Array(max)].map((rate, index) => (
          <React.Fragment key={index}>
            {index > rating ? <> &#9734; </> : <> &#9733;</>}
          </React.Fragment>
        ))
      }
      <span className='count'>{reviews} Reviews
      </span>
    </div>
  </div>
)

export default Rating;