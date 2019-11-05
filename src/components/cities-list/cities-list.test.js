import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list';


it(`CitiesList renders correctly`, () => {
  const citiesList = renderer
    .create(<CitiesList list={[`Amsterdam`, `Paris`, `Cologne`]} selectedCity={`Amsterdam`} />)
    .toJSON();

  expect(citiesList).toMatchSnapshot();
});
