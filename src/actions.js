export const loadListOfMerchants = () => (dispatch) => {
  dispatch({type: 'LOADING_LIST'});
  setTimeout(() => {
    dispatch({ type: 'ADD_MERCHANTS_LIST'})
  }, 3000)
}
