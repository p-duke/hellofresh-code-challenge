import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

it('renders without crashing', () => {
  shallow(<Header />);
});

it ('renders a navigation bar class', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.first().find('.nav-bar').length).toBe(1);
});

it ('renders two links', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(Link).length).toBe(2);
});

it ('renders a logo', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img').length).toBe(1);
});

