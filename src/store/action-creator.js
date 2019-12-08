import ActionTypes from './action-types';

const ActionCreator = {
  loadAllOffers: (offers) => ({type: ActionTypes.LOAD_ALL_OFFERS, payload: offers}),
  loadFavorites: (offers) => ({type: ActionTypes.LOAD_FAVORITES, payload: offers}),
  clearFavorites: () => ({type: ActionTypes.CLEAR_FAVORITES, payload: []}),
  addToFavorites: (offer) => ({type: ActionTypes.ADD_TO_FAVORITES, payload: offer}),
  removeFromFavorites: (id) => ({type: ActionTypes.REMOVE_FROM_FAVORITES, payload: id}),
  changeCity: (city) => ({type: ActionTypes.CHANGE_CITY, payload: city}),
  needAuth: (status) => ({type: ActionTypes.NEED_AUTH, payload: status}),
  saveUserData: (data) => ({type: ActionTypes.SAVE_USER_DATA, payload: data}),
  loadReviews: (reviews) => ({type: ActionTypes.LOAD_REVIEWS, payload: reviews}),
  changeSortOrder: (sortOrder) => ({type: ActionTypes.CHANGE_SORT_ORDER, payload: sortOrder}),
  changeActiveOffer: (offer) => ({type: ActionTypes.CHANGE_ACTIVE_OFFER, payload: offer}),
};

export default ActionCreator;
