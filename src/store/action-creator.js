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
  needAuth: (status) => {
    return {
      type: ActionTypes.NEED_AUTH,
      payload: status
    };
  },
  saveUserData: (data) => {
    return {
      type: ActionTypes.SAVE_USER_DATA,
      payload: data
    };
  },
  switchFavStatus: (offerId) => {
    return {
      type: ActionTypes.SWITCH_FAV_STATUS,
      payload: offerId
    };
  },

};

export default ActionCreator;
