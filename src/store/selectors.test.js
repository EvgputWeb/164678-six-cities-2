import {getCityOffers, getSixCities} from './selectors';
import MOCK_OFFER from '../mocks/mock-offer';


it(`Selector getCityOffers should work correctly`, () => {
  const MOCK_STORE = {
    allOffers: [MOCK_OFFER],
    city: MOCK_OFFER.city.name
  };
  expect(getCityOffers(MOCK_STORE)).toEqual([MOCK_OFFER]);
});


it(`Selector getSixCities should work correctly`, () => {

  const CITIES_ARR = [`Paris`, `Amsterdam`, `London`, `New York`, `Berlin`, `Prague`, `Los Angeles`, `Tokio`];
  const SIX_CITIES = [`Paris`, `Amsterdam`, `London`, `New York`, `Berlin`, `Prague`];

  const MOCK_STORE = {
    allOffers: CITIES_ARR.map((cityName) => {
      const offer = JSON.parse(JSON.stringify(MOCK_OFFER));
      offer.city.name = cityName;
      return offer;
    }),
    city: ``
  };

  expect(getSixCities(MOCK_STORE)).toEqual(SIX_CITIES);
});

