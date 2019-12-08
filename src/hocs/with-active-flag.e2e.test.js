import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveFlag from './with-active-flag';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveFlag(MockComponent);
const wrapperWithoutProps = shallow(<MockComponentWrapped />);
const testValue = true;
const wrapper = shallow(<MockComponentWrapped isActive={testValue}/>);

it(`Check initial state without props`, () => {
  expect(wrapperWithoutProps.state().isActive).toBe(false);
});

it(`Check initial state with props`, () => {
  expect(wrapper.state().isActive).toEqual(testValue);
});

it(`Method onSwitchState should work correctly`, () => {
  if (wrapper.state().isActive) {
    wrapper.props().onSwitchState();
    expect(wrapper.state().isActive).toBe(false);
    wrapper.props().onSwitchState();
    expect(wrapper.state().isActive).toBe(true);
  } else {
    wrapper.props().onSwitchState();
    expect(wrapper.state().isActive).toBe(true);
    wrapper.props().onSwitchState();
    expect(wrapper.state().isActive).toBe(false);
  }
});

