import React from 'react';
import renderer from 'react-test-renderer';
import SignInPage from './sign-in-page';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


it(`SignInPage renders correctly`, () => {

  const state = {
    isAuthorizationRequired: true,
    city: `Paris`
  };

  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };

  const signInPage = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <SignInPage />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(signInPage).toMatchSnapshot();
});
