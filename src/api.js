import axios from 'axios';
import ActionCreator from './store/action-creator';
import history from './history';

const createAPI = (dispatch) => {

  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    switch (err.response.status) {
      case 400: {
        history.push(`/`);
        throw new Error(`400 Bad Request`);
      }
      case 401: {
        dispatch(ActionCreator.needAuth(true));
        dispatch(ActionCreator.saveUserData({}));
        dispatch(ActionCreator.clearFavorites());
        history.push(`/login`);
        break;
      }
    }
    return Promise.reject(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default createAPI;
