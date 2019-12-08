import React from 'react';
import renderer from 'react-test-renderer';
import Page404 from './page-404';
import {MemoryRouter} from 'react-router-dom';


it(`Page404 renders correctly`, () => {
  const page404 = renderer
    .create(
        <MemoryRouter>
          <Page404 />
        </MemoryRouter>
    )
    .toJSON();

  expect(page404).toMatchSnapshot();
});
