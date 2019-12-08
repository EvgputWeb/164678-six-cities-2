import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api';
import ActionTypes from './action-types';
import Operation from './operation';
import MOCK_OFFER from '../mocks/mock-offer';
import MOCK_REVIEWS from '../mocks/mock-reviews';


it(`Operation should make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const loadAllOffers = Operation.loadAllOffers();
  apiMock.onGet(`/hotels`).reply(200, [MOCK_OFFER]);

  return loadAllOffers(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionTypes.LOAD_ALL_OFFERS, payload: [MOCK_OFFER]});
      expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionTypes.CHANGE_CITY, payload: MOCK_OFFER.city.name});
    });
});


it(`Operation should make a correct API call to /login`, () => {
  const mockData = {email: `test@mail.ru`, password: `111`};
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const authRequest = Operation.authRequest(mockData.email, mockData.password);
  apiMock.onPost(`/login`, mockData).reply(200, {userName: `Vasily`});

  return authRequest(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionTypes.NEED_AUTH, payload: false});
      expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionTypes.SAVE_USER_DATA, payload: {userName: `Vasily`}});
    });
});

it(`Operation should make a correct API call to /favorite`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const loadFavorites = Operation.loadFavorites();
  apiMock.onGet(`/favorite`).reply(200, [MOCK_OFFER]);

  return loadFavorites(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionTypes.LOAD_FAVORITES, payload: [MOCK_OFFER]});
    });
});

it(`Operation should make a correct API call addToFavorites`, () => {
  const mockId = 1;
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const addToFavorites = Operation.addToFavorites(mockId);
  MOCK_OFFER[`is_favorite`] = true;
  apiMock.onPost(`/favorite/${mockId}/1`).reply(200, MOCK_OFFER);

  return addToFavorites(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionTypes.ADD_TO_FAVORITES, payload: MOCK_OFFER});
    });
});

it(`Operation should make a correct API call removeFromFavorites`, () => {
  const mockId = 1;
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const removeFromFavorites = Operation.removeFromFavorites(mockId);
  MOCK_OFFER[`is_favorite`] = false;
  apiMock.onPost(`/favorite/${mockId}/0`).reply(200, MOCK_OFFER);

  return removeFromFavorites(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionTypes.REMOVE_FROM_FAVORITES, payload: MOCK_OFFER.id});
    });
});

it(`Operation should make a correct API call loadReviews`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const loadReviews = Operation.loadReviews(MOCK_OFFER.id);
  apiMock.onGet(`/comments/${MOCK_OFFER.id}`).reply(200, MOCK_REVIEWS);

  return loadReviews(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionTypes.LOAD_REVIEWS, payload: MOCK_REVIEWS});
    });
});

it(`Operation should make a correct API call postReview`, () => {
  const mockData = {hotelId: 1, rating: 5, comment: `Amazing`};
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const postReview = Operation.postReview(mockData.hotelId, mockData.rating, mockData.comment);
  apiMock.onPost(`/comments/${mockData.hotelId}`).reply(200, MOCK_REVIEWS);

  return postReview(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionTypes.LOAD_REVIEWS, payload: MOCK_REVIEWS});
    });
});
