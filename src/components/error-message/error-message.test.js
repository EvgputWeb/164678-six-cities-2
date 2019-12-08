import React from 'react';
import renderer from 'react-test-renderer';
import {ErrorMessage} from './error-message';


it(`ErrorMessage renders correctly`, () => {

  const errMsg = renderer
  .create(
      <ErrorMessage
        errorMessage={`Test error`}
        onClearErrorMessage={jest.fn()}
      />
  )
  .toJSON();

  expect(errMsg).toMatchSnapshot();
});
