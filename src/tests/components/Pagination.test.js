/* global describe test expect jest */

import React from 'react';
import { shallow  } from 'enzyme';

import Pagination from '../../components/Pagination';
import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';

describe('Pagination testing', () => {
  const props = {
    paginationAction: jest.fn(),
    pageSize: 3,
    listLength: listOfMerchantsMock.length,
    page: 2
  };
  const wrapper = shallow(<Pagination {...props} />);
  const instance = wrapper.instance();

  test('Render the pagination component', () => {
    expect(wrapper.find('.pagination').length).toBeGreaterThan(0);
  });

  test('Render the pagination component', () => {
    expect(wrapper.find('.pagination').length).toBeGreaterThan(0);
  });

  test('Render the correct number of paginated divs', () => {
    const listLength = instance.props.listLength;
    const pageSize = instance.props.pageSize;
    const calculation = Math.ceil(listLength / pageSize);

    expect(wrapper.find('.pagination_number').length).toBe(calculation);
  });

  test('_renderPaginationNumbers returns the correct number of components and if is active or not', () => {
    const listLength = instance.props.listLength;
    const pageSize = instance.props.pageSize;
    const page = instance.props.page;
    const calculation = Math.ceil(listLength / pageSize);
    const _renderPaginationNumbers = instance._renderPaginationNumbers(pageSize, listLength, page);
    const _renderPaginationActiveWrapper = shallow(
      _renderPaginationNumbers[page - 1]
    ); // page - 1 is the index

    expect(_renderPaginationNumbers.length).toBe(calculation);
    expect(_renderPaginationActiveWrapper.find('.active').length).toBeGreaterThan(0);
  });

  test('The paginationAction is triggered on each link', () => {
    const spy = instance.props.paginationAction;

    wrapper.find('.pagination_number').first().simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
