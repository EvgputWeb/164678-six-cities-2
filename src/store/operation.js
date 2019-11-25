import ActionCreator from './action-creator';

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
      });
  },

};

export default Operation;
