import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
import OFFERS from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});


it(`App render test`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const app = mount(<App placesList={OFFERS} />, {attachTo: div});

  expect(app).toMatchSnapshot();
});


/*
// Теперь не работает из-за карты.
// Ошибка "Map container not found"

import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.js';
import OFFERS from '../../mocks/offers.js';


it(`App renders correctly`, () => {
  const app = renderer
    .create(<App placesList={OFFERS} />)
    .toJSON();

  expect(app).toMatchSnapshot();
});
*/
