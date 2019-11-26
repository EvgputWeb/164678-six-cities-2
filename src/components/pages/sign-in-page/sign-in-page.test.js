import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in';


it(`SignIn renders correctly`, () => {
  const signInComponent = renderer
    .create(<SignIn
      submitAction = {jest.fn()}
    />)
    .toJSON();

  expect(signInComponent).toMatchSnapshot();
});
