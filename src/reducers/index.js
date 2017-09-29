import { LOADING_MERCHANT_LIST, RECEIVE_MERCHANTS_LIST } from '../actions/constants';

const defaultState = {
  loading: false,
  list: []
};

export const merchantsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_MERCHANT_LIST:
      return Object.assign({}, state, {
        loading: true
      });
    case RECEIVE_MERCHANTS_LIST:
      return Object.assign({}, state, {
        loading: false,
        list: action.merchansList
      });
    default:
      return state;
  }
};

const reducers = {
  merchantsList: merchantsReducer
};

export default reducers;
