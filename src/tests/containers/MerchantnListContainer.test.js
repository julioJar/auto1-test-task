/* global describe test expect jest */

import React from 'react';
import { shallow  } from 'enzyme';
import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';

import { MerchantListContainer } from '../../containers/MerchantListContainer';

describe('MerchantListContainer container testing', () => {
  const props = {
    dispatchFetchListOfMerchantsAction: jest.fn(),
    dispatchRemoveMerchantItem: jest.fn(),
    page: 1,
    merchantsList: [listOfMerchantsMock[0], listOfMerchantsMock[1], listOfMerchantsMock[2]],
    listLength: listOfMerchantsMock.length
  };
  const wrapperLoading = shallow(<MerchantListContainer {...props} loading />);
  const wrapper = shallow(<MerchantListContainer {...props} />);
  const instance = wrapper.instance();

  test('renders with loading', () => {
    expect(wrapperLoading.find('.loader').length).toBe(1);
  });

  test('hide loading when renders data is ready', () => {
    expect(wrapper.find('.loader').length).toBe(0);
  });

  test('Render with correct data', () => {
    expect(wrapper.find('.loader').length).toBe(0);
  });

  test('_renderListOfMerchants return the correct data', () => {
    const merchantListOwnProps = instance.props.merchantsList;
    expect(
      instance._renderListOfMerchants(merchantListOwnProps).length
    ).toBe(merchantListOwnProps.length);
  });

  test('Render list of MerchantItemContainer components ', () => {
    const merchantListLength = instance.props.merchantsList.length;
    expect(wrapper.find('MerchantItemContainer').length).toBe(merchantListLength);
  });

  test('_renderListOfMerchants return the correct compnents', () => {
    const merchantListOwnProps = instance.props.merchantsList;
    const componentName = instance._renderListOfMerchants(merchantListOwnProps)[0].type.name;

    expect(componentName).toEqual('MerchantItemContainer');
  });

  test('Should be a pagination Component', () => {
    expect(wrapper.find('Pagination').length).toBeGreaterThan(0);
  });

  test('_removeMerchanItemAction call the dispatcher', () => {
    const spy = instance.props.dispatchRemoveMerchantItem;
    instance._removeMerchanItemAction('12345');
    expect(spy).toHaveBeenCalled();
  });

  test('_removeMerchanItemAction call the dispatcher', () => {
    const spy = instance.props.dispatchRemoveMerchantItem;
    instance._removeMerchanItemAction('12345');
    expect(spy).toHaveBeenCalled();
  });
});
