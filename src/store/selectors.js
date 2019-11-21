import {createSelector} from 'reselect';

const getAllOffers = (state) => state.allOffers;
const getCity = (state) => state.city;

const getCityOffers = createSelector(
    [getAllOffers, getCity],
    (allOffers, cityName) => allOffers.filter((item) => item.city.name === cityName)
);

export {getCityOffers};
