import { loadingListAction, receiveListAction } from '../../actions';
import { listOfMerchantsMock } from '../../APIMock';
import { merchantsReducer } from '../../reducers';

describe('reducer for list of merchants',() => {
  test('Request for receive merchants list', () => {
    const expectedResult = {
      loading: true
    };
    expect(merchantsReducer({}, loadingListAction())).toEqual(expectedResult);
  });

  test('Merchant list arrive successfuly', () => {
    const expectedResult = {
      loading: false,
      merchantsList: listOfMerchantsMock
    };
    expect(merchantsReducer({}, receiveListAction(listOfMerchantsMock))).toEqual(expectedResult);
  });
});
