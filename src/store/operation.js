import ActionCreator from './action-creator';

const Operation = {
  loadAllOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadAllOffers(response.data));
        const initialCity = response.data[0].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
      });
  }
};

export default Operation;
