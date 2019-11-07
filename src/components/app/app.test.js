import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.js';
import {initialState} from '../../reducer';

it(`App renders correctly`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);

  const app = renderer
    .create(<App {...initialState} cityClickAction={jest.fn()} />)
    .toJSON();

  expect(app).toMatchSnapshot();
});
