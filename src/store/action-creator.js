import ActionTypes from './action-types';

const ActionCreator = {
  loadAllOffers: (offers) => {
    return {
      type: ActionTypes.LOAD_ALL_OFFERS,
      payload: offers
    };
  },
  loadFavorites: (offers) => {
    return {
      type: ActionTypes.LOAD_FAVORITES,
      payload: offers
    };
  },
  clearFavorites: () => {
    return {
      type: ActionTypes.CLEAR_FAVORITES,
      payload: []
    };
  },
  addToFavorites: (offer) => {
    return {
      type: ActionTypes.ADD_TO_FAVORITES,
      payload: offer
    };
  },
  removeFromFavorites: (id) => {
    return {
      type: ActionTypes.REMOVE_FROM_FAVORITES,
      payload: id
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

};

export default ActionCreator;
