import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {OFFERS_LIST_PROPTYPE} from '../common-prop-types';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import MapComponent from '../map-component/map-component';
import SortForm from '../sort-form/sort-form';
import PlacesList from '../places-list/places-list';
import withActiveItem from '../../hocs/with-active-item';
import {getSixCities, getCityOffers} from '../../store/selectors';


const CitiesListWrapped = withActiveItem(CitiesList);
const PlacesListWrapped = withActiveItem(PlacesList);


const App = ({citiesList, city, cityOffers}) => {

  if ((citiesList.length === 0) || (city === ``)) {
    return null;
  }

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
              <PlacesListWrapped
                list={cityOffers}
              />
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


App.propTypes = {
  citiesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  cityOffers: OFFERS_LIST_PROPTYPE,
};


const mapStateToProps = (store) => ({
  citiesList: getSixCities(store),
  city: store.city,
  cityOffers: getCityOffers(store)
});


export {App};
export default connect(mapStateToProps)(App);
