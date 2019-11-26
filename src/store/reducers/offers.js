import ActionTypes from '../action-types';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ActionTypes.LOAD_ALL_OFFERS: return action.payload;

    case ActionTypes.SWITCH_FAV_STATUS: {
      return state.map((offer) => {
        if (offer.id === action.payload) {
          const newOffer = JSON.parse(JSON.stringify(offer));
          // eslint-disable-next-line camelcase
          newOffer.is_favorite = !newOffer.is_favorite;
          return newOffer;
        }
        return offer;
      });
    }

  }
  return state;
};

export {reducer as allOffers};
