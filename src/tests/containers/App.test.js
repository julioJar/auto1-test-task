/* global describe test expect */

import React from 'react';
import { shallow  } from 'enzyme';

import App from '../../containers/App';

describe('App container testing', () => {
  const wrapper = shallow(<App />);

  test('renders without crashing', () => {
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  test('renders the image logo and text', () => {
    expect(wrapper.find('img').length).toBeGreaterThan(0);
    expect(wrapper.find('h3').length).toBeGreaterThan(0);
  });
});
