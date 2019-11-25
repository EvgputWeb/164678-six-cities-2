import {combineReducers} from 'redux';
import {allOffers} from './reducers/load-data';
import {city} from './reducers/change-city';
import {isAuthorizationRequired} from './reducers/auth';
import {userData} from './reducers/user-data';

const reducer = combineReducers({
  allOffers,
  city,
  isAuthorizationRequired,
  userData
});

export {reducer};
