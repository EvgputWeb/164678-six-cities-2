import ActionTypes from '../action-types';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_ALL_OFFERS: return action.payload;
  }
  return state;
};

export {reducer as allOffers};
