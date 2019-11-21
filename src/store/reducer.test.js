import {reducer, initialState, ACTIONS, Operation} from './reducer';
import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api';
import MOCK_OFFER from '../mocks/mock-offer';

describe(`Reducer should work correctly`, () => {

  it(`Reducer should return initial state with empty parameters`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change city correctly`, () => {
    expect(reducer(
        {
          allOffers: [],
          city: `Amsterdam`,
          cityOffers: []
        },
        {
          type: ACTIONS.CHANGE_CITY,
          payload: `Paris`
        }
    )).toEqual({
      allOffers: [],
      city: `Paris`,
      cityOffers: []
    });
  });

  it(`Reducer should get city offers correctly`, () => {
    const mockState = {
      allOffers: [MOCK_OFFER],
      city: MOCK_OFFER.city.name,
      cityOffers: [MOCK_OFFER],
    };
    expect(reducer(
        mockState,
        {
          type: ACTIONS.GET_CITY_OFFERS,
          payload: MOCK_OFFER.city.name
        }
    )).toEqual(mockState);
  });

  it(`Reducer should not fail with incorrect parameters`, () => {
    expect(reducer(
        initialState,
        {
          type: `Bla-bla-bla`,
          payload: `Tesla Roadster`
        }
    )).toEqual(initialState);
  });

  it(`Reducer should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadAllOffers = Operation.loadAllOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [MOCK_OFFER]);

    return loadAllOffers(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ACTIONS.LOAD_ALL_OFFERS,
              payload: [MOCK_OFFER]
            });
      });
  });

});
