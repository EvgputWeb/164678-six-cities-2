import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.js';
import Nav from '../nav/nav.js';
import Map from '../map/map.js';
import SortForm from '../sort-form/sort-form.js';
import PlacesList from '../places-list/places-list.js';

const App = ({placesList}) => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Nav />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortForm />
              <PlacesList list={placesList} />
            </section>
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  placesList: PropTypes.arrayOf(
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

export default App;
