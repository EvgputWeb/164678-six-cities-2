import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);
const wrapperWithoutProps = shallow(<MockComponentWrapped />);
const testValue = `Initial Value`;
const wrapper = shallow(<MockComponentWrapped activeItem={testValue}/>);

it(`Check initial state without props`, () => {
  expect(wrapperWithoutProps.state().activeItem).toBeNull();
});

it(`Check initial state with props`, () => {
  expect(wrapper.state().activeItem).toEqual(testValue);
});

it(`Method onActivateItem should work correctly`, () => {
  const activeItem = {value: 777};
  wrapper.props().onActivateItem(activeItem);
  expect(wrapper.state().activeItem).toEqual(activeItem);
});

it(`Method onDeactivateItem should work correctly`, () => {
  wrapper.props().onDeactivateItem();
  expect(wrapper.state().activeItem).toBeNull();
});
