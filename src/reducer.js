const getOffersByCity = (allOffers, cityName) => allOffers.filter((item) => item.city.name === cityName);

const initialState = {
  allOffers: [],
  city: ``,
  cityOffers: []
};


const ACTIONS = {
  LOAD_ALL_OFFERS: `LOAD_ALL_OFFERS`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  loadAllOffers: (offers) => {
    return {
      type: ACTIONS.LOAD_ALL_OFFERS,
      payload: offers
    };
  },
  changeCity: (city) => {
    return {
      type: ACTIONS.CHANGE_CITY,
      payload: city
    };
  },
  getCityOffers: (city) => {
    return {
      type: ACTIONS.GET_CITY_OFFERS,
      payload: city
    };
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTIONS.LOAD_ALL_OFFERS: return Object.assign({}, state, {
      allOffers: action.payload
    });

    case ACTIONS.CHANGE_CITY: return Object.assign({}, state, {
      city: action.payload
    });

    case ACTIONS.GET_CITY_OFFERS: return Object.assign({}, state, {
      cityOffers: getOffersByCity(state.allOffers, action.payload)
    });
  }

  return state;
};


const Operation = {
  loadAllOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadAllOffers(response.data));
        const initialCity = response.data[0].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
        dispatch(ActionCreator.getCityOffers(initialCity));
      });
  }
};


export {ActionCreator, reducer, Operation};

export {initialState, ACTIONS, getOffersByCity}; // использую в  reducer.test.js и в app.test.js
