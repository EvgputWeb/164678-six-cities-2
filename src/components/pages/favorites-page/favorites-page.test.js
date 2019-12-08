import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesPage from './favorites-page';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import MOCK_OFFER from '../../../mocks/mock-offer';


it(`FavoritesPage renders correctly`, () => {

  const state = {
    isAuthorizationRequired: false,
    favorites: [MOCK_OFFER]
  };

  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };

  const favoritesPage = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <FavoritesPage />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(favoritesPage).toMatchSnapshot();
});
