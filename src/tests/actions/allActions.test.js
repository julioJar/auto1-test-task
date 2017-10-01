/* global describe test expect */
import {
  loadingListAction,
  receiveListAction,
  loadingItemAction,
  receiveItemAction,
  removeItemAction
} from '../../actions';
import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';
import {
  LOADING_MERCHANT_LIST,
  RECEIVE_MERCHANTS_LIST,
  LOADING_MERCHANT_ITEM,
  RECEIVE_MERCHANTS_ITEM,
  DELETE_MERCHANT_ITEM
} from '../../actions/constants';

describe('Actions for fetching the Merchants', () => {
  test('loadingListAction', () => {
    const expectedAction = { type: LOADING_MERCHANT_LIST };

    expect(loadingListAction()).toEqual(expectedAction);
  });

  test('The receiveListAction', () => {
    const expectedAction = {
      type: RECEIVE_MERCHANTS_LIST,
      merchansList: listOfMerchantsMock,
      listLength: listOfMerchantsMock.length
    };

    expect(
      receiveListAction(listOfMerchantsMock, listOfMerchantsMock.length)
    ).toEqual(expectedAction);
  });

  test('Loading item action "loadingItemAction"', () => {
    const expectedAction = {
      type: LOADING_MERCHANT_ITEM
    };

    return expect(loadingItemAction()).toEqual(expectedAction);
  });

  test('receiveItemAction data structure', () => {
    const expectedAction = {
      type: RECEIVE_MERCHANTS_ITEM,
      merchantItem: listOfMerchantsMock[2]
    };

    return expect(receiveItemAction(listOfMerchantsMock[2])).toEqual(expectedAction);
  });

  test('remove item action "removeItemAction"', () => {
    const expectedAction = {
      type: DELETE_MERCHANT_ITEM,
      id: listOfMerchantsMock[2].id
    };

    return expect(removeItemAction(listOfMerchantsMock[2].id)).toEqual(expectedAction);
  });
});
