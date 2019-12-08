import React from 'react';
import renderer from 'react-test-renderer';
import MOCK_REVIEWS from '../../mocks/mock-reviews';
import ReviewsList from './reviews-list';
import {Provider} from 'react-redux';


it(`ReviewsList renders correctly`, () => {

  const state = {};

  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };

  const reviewsList = renderer
    .create(
        <Provider store={store}>
          <ReviewsList
            list = {MOCK_REVIEWS}
          />
        </Provider>
    )
    .toJSON();

  expect(reviewsList).toMatchSnapshot();
});
