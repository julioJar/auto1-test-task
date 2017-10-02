/* global describe test expect jest */

import React from 'react';
import { shallow  } from 'enzyme';
import _ from 'lodash';

import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';
import { MerchantItem } from '../../components/MerchantItem';

describe('MerchantItem component testing', () => {
  const props = {
    merchantItem: listOfMerchantsMock[0],
    editAction: jest.fn(),
    removeItemAction: jest.fn()
  };

  const HasPremiumFalseProps = _.assign({}, props, {
    merchantItem: _.assign({}, props.merchantItem, {
      hasPremium: false
    })
  });

  const wrapper = shallow(<MerchantItem {...props} />);
  const noPremiumWrapper = shallow(<MerchantItem {...HasPremiumFalseProps} />);

  const instance = wrapper.instance();

  test('Render with the correct props', () => {
    expect(instance.props).toEqual({ ...props });
  });

  test('Render the correct wrapper', () => {
    expect(wrapper.find('.merchant_item_wrapper').length).toBeGreaterThan(0);
  });

  test('Render the correct table wrapper', () => {
    expect(wrapper.find('.table').length).toBeGreaterThan(0);
  });

  test('Render the correct ammount of bids', () => {
    const bidsLength = _.get(instance.props, 'merchantItem.bids', []).length;

    expect(wrapper.find('.bidItem').length).toBe(bidsLength);
  });

  test('render correct style if hasPremium is true', () => {
    expect(wrapper.find('.merchant_item_wrapper.hasPremium').length).toBeGreaterThan(0);
  });

  test('render correct style if hasPremium is False', () => {
    expect(noPremiumWrapper.find('.merchant_item_wrapper.hasPremium').length).toBe(0);
  });

  test('Render the save button and delete button', () => {
    expect(wrapper.find('.edit.btn').length).toBeGreaterThan(0);
    expect(wrapper.find('.delete.btn').length).toBeGreaterThan(0);
  });

  test('editAction is triggered on click', () => {
    const spy = instance.props.editAction;
    const id = instance.props.merchantItem.id;

    wrapper.find('.edit.btn').simulate('click');
    expect(spy).toHaveBeenCalledWith(id);
  });

  test('removeItemAction is triggered on click', () => {
    const spy = instance.props.removeItemAction;
    const id = instance.props.merchantItem.id;

    wrapper.find('.delete.btn').simulate('click');
    expect(spy).toHaveBeenCalledWith(id);
  });

  test('_renderListOfBids is rendering the correct ammount of bids items', () => {
    const _renderListOfBids = instance._renderListOfBids;
    const bids = _.get(instance.props, 'merchantItem.bids', []);

    wrapper.find('.delete.btn').simulate('click');
    expect(_renderListOfBids(bids).length).toBe(bids.length);
  });
});
