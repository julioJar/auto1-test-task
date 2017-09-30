import _ from 'lodash';

import { RECEIVE_MERCHANTS_LIST, LOADING_MERCHANT_LIST, LOADING_MERCHANT_ITEM, RECEIVE_MERCHANTS_ITEM } from './constants';
import { listOfMerchantsMock } from '../APIMock';

const timeOutFetchSimulation = 1000;

export const fetchListOfMerchants = (pageSize, page) => {
  // resolving the pagination here
  return new Promise((resolve) => {
    const initOffset = pageSize * (page - 1);
    const endOffset = initOffset + pageSize;

    setTimeout(() => {
      const listLength = listOfMerchantsMock.length;
      const paginatedListOfMerchants = _.filter(listOfMerchantsMock, (item, index) => {
        return index >= initOffset && index < endOffset;
      });
      resolve({ paginatedListOfMerchants, listLength });
    }, timeOutFetchSimulation);
  });
};

export const fetchMerchantItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const [merchantItem] = _.filter(listOfMerchantsMock, (item) => {
        return id === item.id;
      });
      resolve(merchantItem);
    }, timeOutFetchSimulation);
  });
};

export const loadingListAction = () => ({
  type: LOADING_MERCHANT_LIST
});

export const receiveListAction = (merchansList, listLength) => ({
  type: RECEIVE_MERCHANTS_LIST,
  merchansList,
  listLength
});

export const loadingItemAction = () => ({
  type: LOADING_MERCHANT_ITEM
});

export const receiveItemAction = merchantItem => ({
  type: RECEIVE_MERCHANTS_ITEM,
  merchantItem
});

export const fetchListOfMerchantsAction = (pageSize = 0, page = 0) => (dispatch) => {
  dispatch(loadingListAction());
  fetchListOfMerchants(pageSize, page).then(({ paginatedListOfMerchants, listLength }) => {
    dispatch(receiveListAction(paginatedListOfMerchants, listLength));
  });
};

export const fetchMerchantItemAction = id => (dispatch) => {
  dispatch(loadingItemAction());
  fetchMerchantItem(id).then((merchantItem) => {
    dispatch(receiveItemAction(merchantItem));
  });
};
