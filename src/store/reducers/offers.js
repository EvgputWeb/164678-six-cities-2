import ActionTypes from '../action-types';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_ALL_OFFERS: return action.payload;
  }
  return state;
};

export {reducer as allOffers};
