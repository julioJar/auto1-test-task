import _ from 'lodash';

import { listOfMerchantsMock } from './dataBaseSimulation';

const timeOutFetchSimulation = 250;

// Trying to imitate server request actions get/post/put
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


// get method of the server for fetching -> In this case we want mutations
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

// Put method of the server for editing -> In this case we want mutations
export const putMerchantItem = (merchantItem) => {
  _.forEach(listOfMerchantsMock, (item, index) => {
    if (merchantItem.id === item.id) {
      listOfMerchantsMock[index] = merchantItem;
    }
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listOfMerchantsMock);
    }, timeOutFetchSimulation);
  });
};


// delete method of the server for removing -> In this case we want mutations
export const deleteMerchantItem = (id) => {
  _.forEach(listOfMerchantsMock, (item, index) => {
    if (item && id === item.id) {
      listOfMerchantsMock.splice(index, 1);
    }
  });
  return listOfMerchantsMock;
};

// post method of the server for adding -> In this case we want mutations
export const addMerchantItem = (merchantItem) => {
  listOfMerchantsMock.push(merchantItem);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listOfMerchantsMock);
    }, timeOutFetchSimulation);
  });
};

// Finish o the serverRequests
