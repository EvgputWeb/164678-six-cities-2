import ActionTypes from './action-types';

const ActionCreator = {
  loadAllOffers: (offers) => {
    return {
      type: ActionTypes.LOAD_ALL_OFFERS,
      payload: offers
    };
  },
  changeCity: (city) => {
    return {
      type: ActionTypes.CHANGE_CITY,
      payload: city
    };
  },
};

export default ActionCreator;
