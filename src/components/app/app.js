import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.js';
import Nav from '../nav/nav.js';
import Map from '../map/map.js';
import SortForm from '../sort-form/sort-form.js';
import PlaceItem from '../place-item/place-item.js';

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
              <div className="cities__places-list places__list tabs__content">

                {placesList.map((placeName, index) =>
                  <PlaceItem
                    key = {index}
                    id = {index}
                    name = {placeName}
                  />
                )}

              </div>
            </section>
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  placesList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
