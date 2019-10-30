import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Nav from '../nav/nav';
import Map from '../map/map';
import SortForm from '../sort-form/sort-form';
import PlacesList from '../places-list/places-list';

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
            <div className="cities__right-section">
              <Map list={placesList} />
            </div>
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
