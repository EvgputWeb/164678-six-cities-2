import {createSelector} from 'reselect';
import {CITIES_COUNT, SORT_ORDERS} from '../constants';

const getAllOffers = (state) => state.allOffers;
const getCity = (state) => state.city;
const getSortOrder = (state) => state.sortOrder;

const getCityOffers = createSelector(
    [getAllOffers, getCity, getSortOrder],
    (allOffers, cityName, sortOrder) => {
      let cityOffers = allOffers.filter((item) => item.city.name === cityName);
      let sortFunction = null;
      switch (sortOrder) {
        case SORT_ORDERS[1]: { sortFunction = (a, b) => (a.price - b.price); break; }
        case SORT_ORDERS[2]: { sortFunction = (a, b) => (b.price - a.price); break; }
        case SORT_ORDERS[3]: { sortFunction = (a, b) => (b.rating - a.rating); break; }
      }
      return (sortFunction) ? (cityOffers.sort(sortFunction)) : (cityOffers);
    }
);

const getSixCities = createSelector(
    getAllOffers,
    (allOffers) => {
      const citiesSet = new Set(allOffers.map((offer) => offer.city.name));
      return [...citiesSet].slice(0, CITIES_COUNT);
    }
);


export {getCityOffers, getSixCities};
