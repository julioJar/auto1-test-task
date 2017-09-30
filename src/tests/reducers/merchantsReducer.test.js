import { loadingListAction, receiveListAction } from '../../actions';
import { listOfMerchantsMock } from '../../APIMock';
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
      merchantsList: listOfMerchantsMock
    };
    expect(merchantsListReducer({}, receiveListAction(listOfMerchantsMock))).toEqual(expectedResult);
  });
});
