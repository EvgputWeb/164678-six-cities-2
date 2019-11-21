import {combineReducers} from 'redux';
import {allOffers} from './reducers/load-data';
import {city} from './reducers/change-city';

const reducer = combineReducers({
  allOffers,
  city
});

export {reducer};
