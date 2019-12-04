import ActionCreator from './action-creator';
import history from '../history';

const Operation = {
  loadAllOffers: () => (dispatch, __, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadAllOffers(response.data));
        const initialCity = response.data[0].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
      });
  },
  authRequest: (email, password) => (dispatch, __, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        dispatch(ActionCreator.needAuth(false));
        dispatch(ActionCreator.saveUserData(response.data));
        history.push(`/`);
        return api.get(`/favorite`);
      }).then((response) => {
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
        dispatch(ActionCreator.loadReviews({hotelId, reviews: response.data}));
      });
  },
  postReview: (hotelId, rating, comment) => (dispatch, __, api) => {
    return api.post(`/comments/${hotelId}`, {rating, comment})
      .then((response) => {
        dispatch(ActionCreator.loadReviews({hotelId, reviews: response.data}));
      });
  },


};

export default Operation;
