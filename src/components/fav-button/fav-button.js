import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Operation from '../../store/operation';


const FavButton = ({id, classPrefix, isFavorite, width, height, addToFavorites, removeFromFavorites}) => {

  const handleClick = () => {
    return (isFavorite) ? (removeFromFavorites(id)) : (addToFavorites(id));
  };

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
  isFavorite: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => {
    dispatch(Operation.addToFavorites(id));
  },
  removeFromFavorites: (id) => {
    dispatch(Operation.removeFromFavorites(id));
  },
});


export {FavButton};
export default connect(null, mapDispatchToProps)(FavButton);
