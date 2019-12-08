import React from 'react';
import renderer from 'react-test-renderer';
import FavButton from './fav-button';
import {Provider} from 'react-redux';
import MOCK_OFFER from '../../mocks/mock-offer';


it(`FavButton renders correctly`, () => {

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

  const favButton = renderer
  .create(
      <Provider store={store}>
        <FavButton
          id={MOCK_OFFER.id}
          classPrefix={`place-card`}
          width={18}
          height={19}
        />
      </Provider>
  )
  .toJSON();

  expect(favButton).toMatchSnapshot();
});
