import { ADD_MERCHANTS_LIST, LOADING_MERCHANT_LIST } from './constants';

const timeOutFetchSimulation = 2000;

const fetchListOfMerchants = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, timeOutFetchSimulation);
  });
}

 const loadingListAction = () => ({
  type: LOADING_MERCHANT_LIST
});

const receiveListAction = merchansList =>({
  type: ADD_MERCHANTS_LIST,
  merchansList
})

export const fetchListOfMerchantsAction = () => (dispatch) => {
  dispatch(loadingListAction());
  fetchListOfMerchants().then((merchantsList) => {
    dispatch(receiveListAction(merchantsList))
  });
};
