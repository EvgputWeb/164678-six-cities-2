import {createSelector} from 'reselect';

const getAllOffers = (state) => state.allOffers;
const getCity = (state) => state.city;

const getCityOffers = createSelector(
    [getAllOffers, getCity],
    (allOffers, cityName) => allOffers.filter((item) => item.city.name === cityName)
);

const getSixCities = createSelector(
    getAllOffers,
    (allOffers) => {
      const CITIES_COUNT = 6;
      const citiesSet = new Set(allOffers.map((offer) => offer.city.name));
      return [...citiesSet].slice(0, CITIES_COUNT);
    }
);


export {getCityOffers, getSixCities};
