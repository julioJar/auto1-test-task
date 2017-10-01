/* global describe test expect */
import {
  loadingItemAction,
  receiveItemAction
} from '../../actions';
import { listOfMerchantsMock } from '../../APIMock/dataBaseSimulation';
import merchantItemReducer from '../../reducers/merchantItemReducer';

describe('Reducer Edit items of an specific merchant', () => {
  test('Merchant Item is fetching', () => {
    const expectedResult = {
      loading: true
    };
    expect(merchantItemReducer({}, loadingItemAction())).toEqual(expectedResult);
  });

  test('Merchant Item receive correct data', () => {
    const expectedResult = {
      loading: false,
      item: listOfMerchantsMock[0]
    };
    expect(
      merchantItemReducer({}, receiveItemAction(listOfMerchantsMock[0]))
    ).toEqual(expectedResult);
  });
});
