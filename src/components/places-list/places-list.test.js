import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesList} from './places-list';
import MOCK_OFFER from '../../mocks/mock-offer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


it(`PlacesList renders correctly`, () => {

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

  const placesList = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PlacesList
              list={[MOCK_OFFER]}
              onActivateItem={jest.fn()}
              onDeactivateItem={jest.fn()}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(placesList).toMatchSnapshot();
});
