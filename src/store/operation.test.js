import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api';
import ActionTypes from './action-types';
import Operation from './operation';
import MOCK_OFFER from '../mocks/mock-offer';


it(`Operation should make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const loadAllOffers = Operation.loadAllOffers();

  apiMock
    .onGet(`/hotels`)
    .reply(200, [MOCK_OFFER]);

  return loadAllOffers(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionTypes.LOAD_ALL_OFFERS,
            payload: [MOCK_OFFER]
          });
      expect(dispatch).toHaveBeenNthCalledWith(2,
          {
            type: ActionTypes.CHANGE_CITY,
            payload: MOCK_OFFER.city.name
          });
    });
});

it(`Operation should make a correct API call to /login`, () => {
  const mockEmail = `test@mail.ru`;
  const mockPassword = `111`;
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const authRequest = Operation.authRequest(mockEmail, mockPassword);

  apiMock
    .onPost(`/login`, {email: mockEmail, password: mockPassword})
    .reply(200, {});

  return authRequest(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionTypes.NEED_AUTH,
            payload: false
          });
      expect(dispatch).toHaveBeenNthCalledWith(2,
          {
            type: ActionTypes.SAVE_USER_DATA,
            payload: {}
          });
    });
});
