import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';


class PlacesList extends React.PureComponent {
  state = {
    activeCard: {},
  };

  mouseEnterHandler = (placeCard) => {
    this.setState({
      activeCard: placeCard // Object.assign({}, placeCard)
    });
  }

  render() {
    const {list} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {list.map((place) => (
          <PlaceCard key={place.id} {...place} onTitleClick={() => {}} onMouseEnter={this.mouseEnterHandler} />
        ))}
      </div>
    );
  }
}


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
};


export default PlacesList;
