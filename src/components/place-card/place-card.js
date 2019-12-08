import React from 'react';
import {Link} from 'react-router-dom';
import {PLACECARD_SHAPE_OBJECT} from '../common-prop-types';
import RatingStars from '../rating-stars/rating-stars';
import FavButton from '../fav-button/fav-button';


const PlaceCard = (props) => {
  const {id, title, type, price, rating, viewStyle} = props;
  const {preview_image: previewImage, is_premium: isPremium} = props;

  const articleClassName = (viewStyle === `stripe`) ? (`favorites__card`) : (`cities__place-card`);
  const imageWrapperClassName = (viewStyle === `stripe`) ? (`favorites__image-wrapper`) : (`cities__image-wrapper`);
  const cardInfoClassName = (viewStyle === `stripe`) ? (`favorites__card-info`) : (``);

  const imageSize = {
    width: 260,
    height: 200
  };
  if (viewStyle === `stripe`) {
    imageSize.width = 150;
    imageSize.height = 110;
  }

  return (
    <article
      className={`${articleClassName} place-card`}
      onMouseEnter={()=> props.onMouseEnter(props)}
      onMouseLeave={props.onMouseLeave}
    >
      { isPremium && (<div className="place-card__mark"><span>Premium</span></div>) }
      <div className={`${imageWrapperClassName} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={imageSize.width} height={imageSize.height} alt="Place image"/>
        </Link>
      </div>
      <div className={`${cardInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <FavButton
            id={id}
            classPrefix={`place-card`}
            width={18}
            height={19}
          />
        </div>
        <RatingStars
          classPrefix={`place-card`}
          rating={rating}
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = PLACECARD_SHAPE_OBJECT;

export default PlaceCard;
