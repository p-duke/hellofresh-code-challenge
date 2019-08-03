import React from 'react';
import { shallow } from 'enzyme';
import Main from '../components/Main';
import { Link } from 'react-router-dom';

it('renders without crashing', () => {
  shallow(<Main />);
});
