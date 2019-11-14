import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {App} from './app.js';
import {initialState} from '../../reducer';


it(`App renders correctly`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);

  const app = renderer
    .create(
        <Provider store={createStore(jest.fn())}>
          <App {...initialState} />
        </Provider>
    )
    .toJSON();

  expect(app).toMatchSnapshot();
});
