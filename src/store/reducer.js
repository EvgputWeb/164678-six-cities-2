import {combineReducers} from 'redux';
import {allOffers} from './reducers/offers';
import {favorites} from './reducers/favorites';
import {city} from './reducers/change-city';
import {isAuthorizationRequired} from './reducers/auth';
import {userData} from './reducers/user-data';
import {reviews} from './reducers/reviews';
import {sortOrder} from './reducers/sort-order';
import {activeOffer} from './reducers/active-offer';


const reducer = combineReducers({
  isAuthorizationRequired,
  userData,
  city,
  allOffers,
  sortOrder,
  activeOffer,
  favorites,
  reviews
});


export {reducer};
