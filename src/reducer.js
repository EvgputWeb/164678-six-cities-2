import OFFERS from './mocks/offers';

const getOffersByCity = (allOffers, city) => allOffers.filter((item) => item.city === city);

const INITIAL_CITY = OFFERS[0].city;

const initialState = {
  allOffers: OFFERS,
  city: INITIAL_CITY,
  cityOffers: getOffersByCity(OFFERS, INITIAL_CITY)
};

const ACTIONS = {
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ACTIONS.CHANGE_CITY,
      payload: city
    };
  },
  getOffers: (city) => {
    return {
      type: ACTIONS.GET_CITY_OFFERS,
      payload: city
    };
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_CITY: return Object.assign({}, state, {
      city: action.payload
    });

    case ACTIONS.GET_CITY_OFFERS: return Object.assign({}, state, {
      cityOffers: getOffersByCity(initialState.allOffers, action.payload)
    });
  }

  return state;
};


export {ActionCreator, reducer};

export {initialState, ACTIONS, getOffersByCity}; // использую в  reducer.test.js и в app.test.js
