import axios from 'axios';
import ActionCreator from './store/action-creator';

const createAPI = (dispatch, history) => {

  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    switch (err.response.status) {
      case 400:
      case 401: {
        dispatch(ActionCreator.needAuth(true));
        dispatch(ActionCreator.saveUserData({}));
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
