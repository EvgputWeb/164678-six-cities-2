import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import MOCK_OFFER from '../../mocks/mock-offer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


it(`PlaceCard renders correctly`, () => {

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

  const placeCard = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PlaceCard
              {...MOCK_OFFER}
              viewStyle={`card`}
              onMouseEnter={jest.fn()}
              onMouseLeave={jest.fn()}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
