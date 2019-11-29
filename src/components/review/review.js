import React from 'react';
import PropTypes from 'prop-types';
import RatingStars from '../../components/rating-stars/rating-stars';


const Review = ({name, avatarUrl, rating, comment, dateStr}) => {
  const date = new Date(dateStr);
  return (
    <React.Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <RatingStars
          classPrefix={`reviews`}
          rating={rating}
        />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{date.toLocaleString(`default`, {month: `long`}) + ` ` + date.getFullYear()}</time>
      </div>
    </React.Fragment>
  );
};


Review.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  dateStr: PropTypes.string.isRequired,
};


export default Review;
