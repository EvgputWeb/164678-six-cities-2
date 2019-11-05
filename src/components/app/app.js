import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import PropTypes from 'prop-types';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import SortForm from '../sort-form/sort-form';
import PlacesList from '../places-list/places-list';


const App = ({allOffers, city, cityOffers, cityClickAction}) => {

  const citiesSet = new Set(allOffers.map((offer) => offer.city));
  const citiesList = [...citiesSet].slice(0, 5);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">

        <h1 className="visually-hidden">Cities</h1>
        <CitiesList list={citiesList} selectedCity={city} onCityClick={cityClickAction} />

        <div className="cities">
          <div className="cities__places-container container">

            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${cityOffers.length} places to stay in ${city}`}</b>
              <SortForm />
              <PlacesList list={cityOffers} />
            </section>

            <div className="cities__right-section">
              <Map list={cityOffers} />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};


const offersArray = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isBookmarked: PropTypes.bool.isRequired
    })
);

App.propTypes = {
  allOffers: offersArray,
  city: PropTypes.string.isRequired,
  cityOffers: offersArray,
  cityClickAction: PropTypes.func.isRequired
};


// приклеиваем данные из store в наш компонент App
const mapStateToProps = (store) => (store);

// привязываем Actions
const mapDispatchToProps = (dispatch) => ({
  cityClickAction: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
