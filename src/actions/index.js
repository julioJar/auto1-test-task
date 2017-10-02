import { fetchListOfMerchants, fetchMerchantItem, deleteMerchantItem  } from '../APIMock/serverActions';
import {
  RECEIVE_MERCHANTS_LIST,
  LOADING_MERCHANT_LIST,
  LOADING_MERCHANT_ITEM,
  RECEIVE_MERCHANTS_ITEM,
  DELETE_MERCHANT_ITEM,
  SORT_LIST_BY_NAME,
  SORT_LIST_BY_AMOUNT,
  SORT_LIST_BY_DATE
} from './constants';

export const loadingListAction = () => ({
  type: LOADING_MERCHANT_LIST
});

export const receiveListAction = (merchansList, listLength) => ({
  type: RECEIVE_MERCHANTS_LIST,
  merchansList,
  listLength
});

export const removeItemAction = id => ({
  type: DELETE_MERCHANT_ITEM,
  id
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

export const removeMerchantItem = id => (dispatch) => {
  deleteMerchantItem(id);
  dispatch(removeItemAction(id));
};

export const sortItemsByName = id => ({
  type: SORT_LIST_BY_NAME,
  id
});

export const sortItemsByAmount = id => ({
  type: SORT_LIST_BY_AMOUNT,
  id
});

export const sortItemsByDate = id => ({
  type: SORT_LIST_BY_DATE,
  id
});
