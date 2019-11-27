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
  loadFavorites: () => (dispatch, __, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },
  authRequest: (email, password) => (dispatch, __, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        dispatch(ActionCreator.needAuth(false));
        dispatch(ActionCreator.saveUserData(response.data));
        history.push(`/`);
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


};

export default Operation;
