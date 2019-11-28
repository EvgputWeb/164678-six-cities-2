import React from 'react';
import PropTypes from 'prop-types';


const RatingStars = ({classPrefix, rating, isValueVisible = false}) => {
  return (
    <div className={`${classPrefix}__rating rating`}>
      <div className={`${classPrefix}__stars rating__stars`}>
        <span style={{width: (rating / 5) * 100 + `%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      { (isValueVisible) && (<span className={`${classPrefix}__rating-value rating__value`}>{rating.toFixed(1)}</span>) }
    </div>
  );
};


RatingStars.propTypes = {
  classPrefix: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isValueVisible: PropTypes.bool
};


export default RatingStars;
