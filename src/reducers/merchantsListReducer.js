import _ from 'lodash';
import {
  LOADING_MERCHANT_LIST,
  RECEIVE_MERCHANTS_LIST,
  DELETE_MERCHANT_ITEM,
  SORT_LIST_BY_NAME,
  SORT_LIST_BY_AMOUNT,
  SORT_LIST_BY_DATE
} from '../actions/constants';

const defaultState = {
  loading: false,
  list: [],
  listLength: 0
};


const sortByAmount = (list, id) => {
  const listCopy = _.cloneDeep(list);

  _.each(listCopy, (item) => {
    if (item.id === id) {
      item.bids.sort((a, b) => {
        return a.amount - b.amount;
      });
    }
  });

  return listCopy;
};

const sortByDate = (list, id) => {
  const listCopy = _.cloneDeep(list);

  _.each(listCopy, (item) => {
    if (item.id === id) {
      item.bids.sort((a, b) => {
        return new Date(b.created) - new Date(a.created);
      });
    }
  });

  return listCopy;
};

const sortByName = (list, id, order) => {
  const listCopy = _.cloneDeep(list);

  _.each(listCopy, (item) => {
    if (item.id === id) {
      item.bids.sort((a, b) => {
        const nameA = a.carTitle.toUpperCase(); // ignore upper and lowercase
        const nameB = b.carTitle.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1 * order;
        }
        if (nameA > nameB) {
          return 1 * order;
        }
        return 0;
      });
    }
  });

  return listCopy;
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
    case SORT_LIST_BY_NAME:
      return _.assign({}, state, {
        list: sortByName(state.list, action.id, 1),
      });
    case SORT_LIST_BY_AMOUNT:
      return _.assign({}, state, {
        list: sortByAmount(state.list, action.id),
      });
    case SORT_LIST_BY_DATE:
      return _.assign({}, state, {
        list: sortByDate(state.list, action.id),
      });
    case DELETE_MERCHANT_ITEM:
      const listCopy = _.cloneDeep(state.list);
      const list = _.filter(listCopy, (item) => {
        return item.id !== action.id;
      });
      const listLength = state.listLength - 1;

      return  {
        list, // this is a complete new object
        listLength
      };
    default:
      return state;
  }
};
