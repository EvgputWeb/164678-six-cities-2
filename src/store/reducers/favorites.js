import ActionTypes from '../action-types';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FAVORITES: return action.payload;
    case ActionTypes.CLEAR_FAVORITES: return INITIAL_STATE;
    case ActionTypes.ADD_TO_FAVORITES: {
      const favById = state.filter((favOffer) => favOffer.id === action.payload.id);
      if (favById.length === 0) {
        return [...state, action.payload];
      }
      break;
    }
    case ActionTypes.REMOVE_FROM_FAVORITES: {
      return state.filter((favOffer) => favOffer.id !== action.payload);
    }
  }
  return state;
};

export {reducer as favorites};
