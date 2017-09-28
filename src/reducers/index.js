const merchantsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOADING_LIST':
      return {
        loading: true
      };
    case 'ADD_MERCHANTS_LIST':
      return {
        loading: false
      };
    default:
      return state;
  }
};

const reducers = {
  merchantList: merchantsReducer
};

export default reducers;