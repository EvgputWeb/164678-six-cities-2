import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import MOCK_OFFER from '../../../mocks/mock-offer';
import {SORT_ORDERS} from '../../../constants';


it(`MainPage renders correctly`, () => {

  const state = {
    isAuthorizationRequired: false,
    allOffers: [MOCK_OFFER],
    citiesList: [MOCK_OFFER.city.name],
    city: MOCK_OFFER.city.name,
    cityOffers: [MOCK_OFFER],
    favorites: [],
    sortOrder: SORT_ORDERS[0]
  };

  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };

  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);

  const mainPage = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(mainPage).toMatchSnapshot();
});
