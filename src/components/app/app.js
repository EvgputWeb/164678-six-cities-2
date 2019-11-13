import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import MapComponent from '../map-component/map-component';
import SortForm from '../sort-form/sort-form';
import PlacesList from '../places-list/places-list';
import withActiveItem from '../../hocs/with-active-item';


const CitiesListWrapped = withActiveItem(CitiesList);
// const PlacesListWrapped = withActiveItem(PlacesList);


const App = ({allOffers, city, cityOffers}) => {

  const page = 0;
  const perPage = 5;
  const citiesSet = new Set(allOffers.map((offer) => offer.city));
  const citiesList = [...citiesSet].slice(page * perPage, (page + 1) * perPage);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">

        <h1 className="visually-hidden">Cities</h1>
        <CitiesListWrapped
          list={citiesList}
          activeItem={city}
        />

        <div className="cities">
          <div className="cities__places-container container">

            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${cityOffers.length} places to stay in ${city}`}</b>
              <SortForm />
              <PlacesList list={cityOffers} />
            </section>

            <div className="cities__right-section">
              <MapComponent list={cityOffers} />
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
};


// приклеиваем данные из store в наш компонент App
const mapStateToProps = (store) => ({
  allOffers: store.allOffers,
  city: store.city,
  cityOffers: store.cityOffers
});


export {App};
export default connect(mapStateToProps)(App);
