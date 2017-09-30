import _ from 'lodash';
import { LOADING_MERCHANT_LIST, RECEIVE_MERCHANTS_LIST, DELETE_MERCHANT_ITEM } from '../actions/constants';
import { deepCopy } from '../utils/deepCopy';

const defaultState = {
  loading: false,
  list: [],
  listLength: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_MERCHANT_LIST:
      return _.assign({}, state, {
        loading: true
      });
    case RECEIVE_MERCHANTS_LIST:
      return _.assign({}, state, {
        loading: false,
        list: action.merchansList,
        listLength: action.listLength
      });
    case DELETE_MERCHANT_ITEM:
      const listCopy = deepCopy(state.list);
      const list = _.filter(listCopy, (item) => {
        return item.id !== action.id;
      });
      const listLength = state.listLength - 1;

      return _.assign({}, state, {
        list, // this is a complete new object
        listLength
      });
    default:
      return state;
  }
};
