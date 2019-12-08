import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review';
import MOCK_REVIEWS from '../../mocks/mock-reviews';


it(`Review renders correctly`, () => {
  const review = renderer
    .create(
        <Review
          name={MOCK_REVIEWS[0].user.name}
          avatarUrl={MOCK_REVIEWS[0].user.avatar_url}
          rating={MOCK_REVIEWS[0].rating}
          comment={MOCK_REVIEWS[0].comment}
          dateStr={MOCK_REVIEWS[0].date}
        />)
    .toJSON();

  expect(review).toMatchSnapshot();
});
