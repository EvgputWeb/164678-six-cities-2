import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from './review-form';
import MOCK_OFFER from '../../mocks/mock-offer';
import MOCK_REVIEWS from '../../mocks/mock-reviews';


it(`ReviewForm renders correctly`, () => {

  const header = renderer
  .create(
      <ReviewForm
        activeOffer={MOCK_OFFER}
        reviews={MOCK_REVIEWS}
      />
  )
  .toJSON();

  expect(header).toMatchSnapshot();
});
