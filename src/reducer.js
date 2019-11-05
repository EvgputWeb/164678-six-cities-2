import OFFERS from './mocks/offers';

const INITIAL_CITY = `Amsterdam`;

const initialState = {
  allOffers: OFFERS,
  city: INITIAL_CITY,
  cityOffers: OFFERS.filter((place) => place.city === INITIAL_CITY),
};


const ActionCreator = {
  changeCity: (city) => {
    return {
      type: `CHANGE_CITY`,
      payload: city
    };
  },
  getOffers: (city) => {
    return {
      type: `GET_CITY_OFFERS`,
      payload: city
    };
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return Object.assign({}, state, {
      city: action.payload
    });

    case `GET_CITY_OFFERS`: return Object.assign({}, state, {
      cityOffers: initialState.allOffers.filter((place) => place.city === action.payload)
    });
  }

  return state;
};


export {ActionCreator, reducer};
