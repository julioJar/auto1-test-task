import {
  LOADING_MERCHANT_ITEM,
  RECEIVE_MERCHANTS_ITEM
} from '../actions/constants';

const defaultState = {
  loading: false,
  item: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_MERCHANT_ITEM:
      return Object.assign({}, state, {
        loading: true
      });
    case RECEIVE_MERCHANTS_ITEM:
      return Object.assign({}, state, {
        loading: false,
        item: action.merchantItem
      });
    default:
      return state;
  }
};
