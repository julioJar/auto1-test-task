/* global describe test expect */
import {
  loadingListAction,
  receiveListAction,
  removeItemAction
} from '../../actions';
import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';
import merchantsListReducer from '../../reducers/merchantsListReducer';

describe('reducer for list of merchants', () => {
  test('Request for receive merchants list', () => {
    const expectedResult = {
      loading: true
    };
    expect(merchantsListReducer({}, loadingListAction())).toEqual(expectedResult);
  });

  test('Merchant list arrive successfuly', () => {
    const expectedResult = {
      loading: false,
      list: listOfMerchantsMock,
      listLength: listOfMerchantsMock.length
    };
    expect(
      merchantsListReducer({}, receiveListAction(
        listOfMerchantsMock, listOfMerchantsMock.length
      ))).toEqual(expectedResult
    );
  });

  test('Merchant list remove successfuly', () => {
    const expectedResult = {
      list: [listOfMerchantsMock[1], listOfMerchantsMock[2]],
      listLength: listOfMerchantsMock.length - 1
    };
    expect(
      merchantsListReducer({
        list: [listOfMerchantsMock[0], listOfMerchantsMock[1], listOfMerchantsMock[2]],
        listLength: listOfMerchantsMock.length
      }, removeItemAction(
        listOfMerchantsMock[0].id
      ))
    ).toEqual(expectedResult);
  });
});
