import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withFormState from './with-form-state';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFormState(MockComponent);
const wrapperWithoutProps = shallow(<MockComponentWrapped />);
const testValue = {userName: `Vasily`};
const wrapper = shallow(<MockComponentWrapped formState={testValue}/>);

it(`Check initial state without props`, () => {
  expect(wrapperWithoutProps.state()).toEqual({});
});

it(`Check initial state with props`, () => {
  expect(wrapper.state()).toEqual(testValue);
});

it(`Method onClearFormState should work correctly`, () => {
  wrapper.props().onClearFormState();
  expect(wrapper.state()).toEqual({userName: null});
});

it(`Method onFieldChange should work correctly`, () => {
  wrapper.props().onClearFormState();
  wrapper.props().onFieldChange(`age`, `77`);
  expect(wrapper.state()).toEqual({userName: null, age: `77`});
  wrapper.props().onFieldChange(`userName`, `Pupkin`);
  expect(wrapper.state()).toEqual({userName: `Pupkin`, age: `77`});
  wrapper.props().onClearFormState();
  expect(wrapper.state()).toEqual({userName: null, age: null});
});
