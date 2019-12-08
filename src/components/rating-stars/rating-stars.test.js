import React from 'react';
import renderer from 'react-test-renderer';
import RatingStars from './rating-stars';


it(`RatingStars renders correctly`, () => {
  const review = renderer
    .create(
        <RatingStars
          classPrefix={`property`}
          rating={5}
          isValueVisible={true}
        />)
    .toJSON();

  expect(review).toMatchSnapshot();
});
