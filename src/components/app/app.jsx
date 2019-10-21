import React from "react";
import PropTypes from 'prop-types';
import Header from './header.jsx';
import Nav from './nav.jsx';
import Map from './map.jsx';
import SortForm from './sort-form.jsx';
import Places from './places.jsx';


export default function App({placesList}) {
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
                <Places
                  placesList = {placesList}
                />
              </div>
            </section>
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}


App.propTypes = {
  placesList: PropTypes.arrayOf(PropTypes.string).isRequired
};
