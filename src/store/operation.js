import ActionCreator from './action-creator';
import {POST_REVIEW_ERROR} from '../constants';

const Operation = {
  loadAllOffers: () => (dispatch, __, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadAllOffers(response.data));
        const randomOfferIndex = Math.floor(Math.random() * response.data.length);
        const initialCity = response.data[randomOfferIndex].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
      });
  },
  authRequest: (email, password) => (dispatch, __, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        dispatch(ActionCreator.needAuth(false));
        dispatch(ActionCreator.saveUserData(response.data));
      });
  },
  loadFavorites: () => (dispatch, __, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },
  addToFavorites: (id) => (dispatch, __, api) => {
    return api.post(`/favorite/${id}/1`)
      .then((response) => {
        const offer = response.data;
        if (offer.is_favorite) {
          dispatch(ActionCreator.addToFavorites(offer));
        }
      });
  },
  removeFromFavorites: (id) => (dispatch, __, api) => {
    return api.post(`/favorite/${id}/0`)
      .then((response) => {
        const offer = response.data;
        if (!offer.is_favorite) {
          dispatch(ActionCreator.removeFromFavorites(offer.id));
        }
      });
  },
  loadReviews: (hotelId) => (dispatch, __, api) => {
    return api.get(`/comments/${hotelId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  postReview: (hotelId, rating, comment) => (dispatch, __, api) => {
    return api.post(`/comments/${hotelId}`, {rating, comment})
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      })
      .catch(()=>{
        dispatch(ActionCreator.setErrorMessage(POST_REVIEW_ERROR));
      });
  },
};

export default Operation;
