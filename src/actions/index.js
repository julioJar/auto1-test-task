import _ from 'lodash';

import { RECEIVE_MERCHANTS_LIST, LOADING_MERCHANT_LIST } from './constants';
import { listOfMerchantsMock } from '../APIMock';

const timeOutFetchSimulation = 1000;

export const fetchListOfMerchants = (pageSize, page) => {
  // resolving the pagination here
  return new Promise((resolve) => {
    const initOffset = pageSize * (page - 1);
    const endOffset = initOffset + pageSize;

    setTimeout(() => {
      const paginatedListOfMerchants = _.filter(listOfMerchantsMock, (item, index) => {
        return index >= initOffset && index < endOffset;
      });
      resolve(paginatedListOfMerchants);
    }, timeOutFetchSimulation);
  });
};

export const loadingListAction = () => ({
  type: LOADING_MERCHANT_LIST
});

export const receiveListAction = merchansList => ({
  type: RECEIVE_MERCHANTS_LIST,
  merchansList
});

export const fetchListOfMerchantsAction = (pageSize = 0, page = 0) => (dispatch) => {
  dispatch(loadingListAction());
  fetchListOfMerchants(pageSize, page).then((merchantsList) => {
    dispatch(receiveListAction(merchantsList));
  });
};
