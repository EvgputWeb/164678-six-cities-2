import React from 'react';
import {connect} from 'react-redux';
import {PLACECARD_SHAPE_OBJECT} from '../common-prop-types';
import Operation from '../../store/operation';


const PlaceCard = (props) => {

  const {id, title, type, price, rating} = props;
  const {preview_image: previewImage, is_premium: isPremium} = props;
  const {favorites, addToFavorites, removeFromFavorites} = props;

  const isFavorite = () => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === id) {
        return true;
      }
    }
    return false;
  };

  const mouseEnterHandler = () => {
    props.onMouseEnter(props);
  };

  const buttonFavClickHandler = () => {
    if (isFavorite()) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={mouseEnterHandler} onMouseLeave={props.onMouseLeave} >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ` + ((isFavorite()) ? (`place-card__bookmark-button--active`) : (``)) + ` button`}
            type="button"
            onClick={buttonFavClickHandler}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (rating / 5) * 100 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={props.onTitleClick} >{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>

    </article>
  );

};


PlaceCard.propTypes = PLACECARD_SHAPE_OBJECT;


const mapStateToProps = (store) => ({
  favorites: store.favorites
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => {
    dispatch(Operation.addToFavorites(id));
  },
  removeFromFavorites: (id) => {
    dispatch(Operation.removeFromFavorites(id));
  },
});


export {PlaceCard};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);

