/* global describe test expect jest */

import React from 'react';
import { shallow  } from 'enzyme';

import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';
import { MerchantItemContainer } from '../../containers/MerchantItemContainer';

describe('MerchantItemContainer testing', () => {
  const props = {
    merchantItem: listOfMerchantsMock[0],
    removeItemAction: jest.fn()
  };
  const wrapper = shallow(<MerchantItemContainer {...props} />);
  const instance = wrapper.instance();

  test('Render with the correct props', () => {
    expect(instance.props).toEqual({ ...props });
  });

  test('Render the correct child component', () => {
    expect(wrapper.find('MerchantItem').length).toBeGreaterThan(0);
  });
});
