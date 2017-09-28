import { loadingListAction, receiveListAction, fetchListOfMerchants } from '../../actions';
import { listOfMerchantsMock } from '../../APIMock';
import { LOADING_MERCHANT_LIST, RECEIVE_MERCHANTS_LIST } from '../../actions/constants';

describe('Actions for fetching the Merchants',() => {
  test('loadingListAction', () => {
    const expectedAction = { type: LOADING_MERCHANT_LIST };

    expect(loadingListAction()).toEqual(expectedAction);
  });

  test('The receiveListAction', () => {
    const expectedAction = { type: RECEIVE_MERCHANTS_LIST, merchansList: {data: 'test'} };

    expect(receiveListAction({data: 'test'})).toEqual(expectedAction);
  });

  test('The fetchListOfMerchants Promise', () => {
    return expect(fetchListOfMerchants()).resolves.toEqual(listOfMerchantsMock);
  });
})
