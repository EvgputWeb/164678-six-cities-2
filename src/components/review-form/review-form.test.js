import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {ReviewForm} from './review-form';
import MOCK_OFFER from '../../mocks/mock-offer';
import MOCK_REVIEWS from '../../mocks/mock-reviews';


it(`ReviewForm renders correctly`, () => {

  const state = {
    errorMessage: ``
  };

  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };


  const header = renderer
  .create(
      <Provider store={store}>
        <ReviewForm
          activeOffer={MOCK_OFFER}
          reviews={MOCK_REVIEWS}
        />
      </Provider>
  )
  .toJSON();

  expect(header).toMatchSnapshot();
});
