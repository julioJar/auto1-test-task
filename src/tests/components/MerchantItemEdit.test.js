/* global describe test expect jest */

import React from 'react';
import { shallow  } from 'enzyme';
import _ from 'lodash';

import MerchantItemEdit from '../../components/MerchantItemEdit';
import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';

describe('MerchantItemEdit component testing', () => {
  const props = {
    merchantItem: listOfMerchantsMock[0],
    action: jest.fn(),
    loading: false
  };

  const loadingProps = _.assign({}, props, {
    loading: true
  });

  const wrapper = shallow(<MerchantItemEdit {...props} />);
  const loadingWrapper = shallow(<MerchantItemEdit {...loadingProps} />);
  const instance = wrapper.instance();

  test('Loading is true so render the loading image', () => {
    expect(loadingWrapper.find('.loader').length).toBeGreaterThan(0);
  });

  test('Render the correct css wraper', () => {
    expect(wrapper.find('.merchant_item_wrapper.edition').length).toBeGreaterThan(0);
  });

  test('Render the correct css wraper', () => {
    expect(wrapper.find('.merchant_item_wrapper.edition').length).toBeGreaterThan(0);
  });

  test('If is premium should have the premium css label', () => {
    expect(wrapper.find('.merchant_item_wrapper.edition.hasPremium').length).toBeGreaterThan(0);
  });

  test('Should have 5 Inputs', () => {
    expect(wrapper.find('input').length).toBe(5);
  });

  test('First Name should change on writing', () => {
    const value = 'Julio';

    wrapper.setState({
      firstname: value
    });
    expect(wrapper.find('#firstname').props().value).toBe(value);
  });

  test('Last Name should change on state change', () => {
    const value = 'Julio';

    wrapper.setState({
      lastname: value
    });
    expect(wrapper.find('#lastname').props().value).toBe(value);
  });

  test('email should change on state change', () => {
    const value = 'Julio';

    wrapper.setState({
      email: value
    });
    expect(wrapper.find('#email').props().value).toBe(value);
  });

  test('phone should change on state change', () => {
    const value = 'Julio';

    wrapper.setState({
      phone: value
    });
    expect(wrapper.find('#phone').props().value).toBe(value);
  });

  test('hasPremium should change on state change', () => {
    const value = true;

    wrapper.setState({
      hasPremium: value
    });
    expect(wrapper.find('#hasPremium').props().checked).toBe(value);
  });

  test('Save button', () => {
    const spy = instance.props.action;
    const id = _.get(instance.props, 'merchantItem.id', null);
    const bids = _.get(instance.props, 'merchantItem.bids', null);
    const avatar_url = _.get(instance.props, 'merchantItem.avatar_url', null);
    const objectToSend = {
      id,
      bids,
      avatar_url
    };
    wrapper.find('.btn.save').simulate('click');
    expect(spy).toHaveBeenCalledWith(instance.state, objectToSend);
  });
});
