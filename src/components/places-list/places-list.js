import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';


const PlacesList = ({list, onActivateItem, onDeactivateItem}) => {

  const mouseEnterHandler = (placeCard) => () => {
    onActivateItem(placeCard);
  };

  const mouseLeaveHandler = () => {
    onDeactivateItem();
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {list.map((place) => (
        <PlaceCard
          key={place.id}
          {...place}
          onTitleClick={() => {}}
          onMouseEnter={mouseEnterHandler(place)}
          onMouseLeave={mouseLeaveHandler}
        />
      ))}
    </div>
  );
};


PlacesList.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmarked: PropTypes.bool.isRequired
      })
  ),
  onActivateItem: PropTypes.func.isRequired,
  onDeactivateItem: PropTypes.func.isRequired,
};


export default PlacesList;
