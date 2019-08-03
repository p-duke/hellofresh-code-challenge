import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

it('renders without crashing', () => {
  shallow(<Footer />);
});

it ('renders a logo', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('img')).toHaveLength(1);
});

