import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


it(`Header renders correctly`, () => {

  const state = {};

  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };

  const header = renderer
  .create(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
  )
  .toJSON();

  expect(header).toMatchSnapshot();
});
