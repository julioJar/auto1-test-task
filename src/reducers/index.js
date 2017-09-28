import { LOADING_MERCHANT_LIST, RECEIVE_MERCHANTS_LIST } from '../actions/constants';

export const merchantsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING_MERCHANT_LIST:
      return Object.assign({}, state, {
        loading: true
      });
    case RECEIVE_MERCHANTS_LIST:
      return Object.assign({}, state, {
        loading: false,
        merchantsList: action.merchansList
      });
    default:
      return state;
  }
};

const reducers = {
  merchantList: merchantsReducer
};

export default reducers;
