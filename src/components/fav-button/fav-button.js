import React from 'react';
import PropTypes from 'prop-types';
import {OFFERS_LIST_PROPTYPE} from '../common-prop-types';
import {connect} from 'react-redux';
import Operation from '../../store/operation';


const FavButton = ({id, classPrefix, width, height, favorites, addToFavorites, removeFromFavorites}) => {

  const isFavorite = (favorites.filter((favOffer) => favOffer.id === id)).length > 0;

  const handleClick = () => (isFavorite) ? (removeFromFavorites(id)) : (addToFavorites(id));

  return (
    <button
      className={`${classPrefix}__bookmark-button ` + ((isFavorite) ? (`place-card__bookmark-button--active`) : (``)) + ` button`}
      type="button"
      onClick={handleClick}
    >
      <svg className={`place-card__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{((isFavorite) ? (`In`) : (`To`)) + ` bookmarks`}</span>
    </button>
  );
};


FavButton.propTypes = {
  id: PropTypes.number.isRequired,
  classPrefix: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  favorites: OFFERS_LIST_PROPTYPE,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};


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


export {FavButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavButton);
