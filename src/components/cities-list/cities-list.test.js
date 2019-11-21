import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list';


it(`CitiesList renders correctly`, () => {
  const list = [`Paris`, `Amsterdam`, `Hamburg`];
  const activeCity = `Paris`;

  const citiesList = renderer
    .create(
        <CitiesList
          list={list}
          activeItem={activeCity}
          onActivateItem={jest.fn()}
          cityClickAction={jest.fn()}
        />
    )
    .toJSON();

  expect(citiesList).toMatchSnapshot();
});
