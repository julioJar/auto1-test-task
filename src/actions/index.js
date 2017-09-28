import { RECEIVE_MERCHANTS_LIST, LOADING_MERCHANT_LIST } from './constants';
import { listOfMerchantsMock } from '../APIMock';

const timeOutFetchSimulation = 2000;

export const fetchListOfMerchants = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listOfMerchantsMock);
    }, timeOutFetchSimulation);
  });
}

export const loadingListAction = () => ({
  type: LOADING_MERCHANT_LIST
});

export const receiveListAction = merchansList =>({
  type: RECEIVE_MERCHANTS_LIST,
  merchansList
})

export const fetchListOfMerchantsAction = () => (dispatch) => {
  dispatch(loadingListAction());
  fetchListOfMerchants().then((merchantsList) => {
    dispatch(receiveListAction(merchantsList))
  });
};
