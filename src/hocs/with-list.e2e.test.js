import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withList from './with-list';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withList(MockComponent);
const wrapperWithoutProps = shallow(<MockComponentWrapped />);
const testList = [`item1`, `item2`];
const wrapper = shallow(<MockComponentWrapped list={testList}/>);

it(`Check initial state without props`, () => {
  expect(wrapperWithoutProps.state().list).toEqual([]);
});

it(`Check initial state with props`, () => {
  expect(wrapper.state().list).toEqual(testList);
});

it(`Method onSetList should work correctly`, () => {
  const mockList = [`tomato`, `cucumber`, `potato`];
  wrapper.props().onSetList(mockList);
  expect(wrapper.state().list).toEqual(mockList);
});

it(`Method onClearList should work correctly`, () => {
  wrapper.props().onClearList();
  expect(wrapper.state().list).toEqual([]);
});
