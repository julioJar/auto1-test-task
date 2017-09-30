import { LOADING_MERCHANT_LIST, RECEIVE_MERCHANTS_LIST } from '../actions/constants';

const defaultState = {
  loading: false,
  list: [],
  listLength: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_MERCHANT_LIST:
      return Object.assign({}, state, {
        loading: true
      });
    case RECEIVE_MERCHANTS_LIST:
      return Object.assign({}, state, {
        loading: false,
        list: action.merchansList,
        listLength: action.listLength
      });
    default:
      return state;
  }
};
