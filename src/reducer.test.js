import {reducer, initialState, ACTIONS, getOffersByCity} from './reducer';


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
    const testCity = `Paris`;
    const testCityOffers = getOffersByCity(initialState.allOffers, testCity);

    expect(reducer(
        initialState,
        {
          type: ACTIONS.GET_CITY_OFFERS,
          payload: testCity
        }
    )).toEqual(Object.assign({}, initialState, {cityOffers: testCityOffers}));
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

});
