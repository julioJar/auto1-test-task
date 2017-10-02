/* global describe test expect jest */

import React from 'react';
import { shallow  } from 'enzyme';
import _ from 'lodash';

import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';
import { MerchantItemEditContainer } from '../../containers/MerchantItemEditContainer';

describe('MerchantItemEditContainer testing', () => {
  const modeEditProps = {
    merchantItemData: listOfMerchantsMock[0],
    dispatchFetchMerchantItemAction: jest.fn(),
    merchantItemId: listOfMerchantsMock[0].id,
    page: 1,
    route: {
      mode: 'edition'
    }
  };

  const modeAddProps = _.assign({}, modeEditProps, {
    route: _.assign({}, modeEditProps.route, {
      mode: 'add'
    })
  });

  const editModewrapper = shallow(<MerchantItemEditContainer {...modeEditProps} />);
  const addModeWrapper = shallow(<MerchantItemEditContainer {...modeAddProps} />);
  const editModeInstance = editModewrapper.instance();
  const addModeInstance = addModeWrapper.instance();

  test('Render with the correct props', () => {
    expect(editModeInstance.props).toEqual({ ...modeEditProps });
  });

  test('Render the correct child component', () => {
    expect(editModewrapper.find('MerchantItemEdit').length).toBeGreaterThan(0);
  });

  test('Render the correct child component', () => {
    expect(addModeInstance.props).toEqual(modeAddProps);
  });
});
