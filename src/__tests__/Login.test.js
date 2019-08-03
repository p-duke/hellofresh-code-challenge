import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Login from '../components/Login';

it('renders without crashing', () => {
  shallow(<Login />);
});

it('renders with default state', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.state().errors).toBeDefined();
  expect(wrapper.state().errorMessage).toBeDefined();
});

it('renders an form with email and password', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('form')).toHaveLength(1);
  expect(wrapper.find('input[type="email"]')).toHaveLength(1);
  expect(wrapper.find('input[type="password"]')).toHaveLength(1);
});
