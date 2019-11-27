import React from 'react';
import PropTypes from 'prop-types';
import {OFFERS_LIST_PROPTYPE} from '../common-prop-types';
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
          viewStyle={`card`}
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
  list: OFFERS_LIST_PROPTYPE,
  onActivateItem: PropTypes.func.isRequired,
  onDeactivateItem: PropTypes.func.isRequired,
};


export default PlacesList;
