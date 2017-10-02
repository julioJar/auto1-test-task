import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import PropTypes from 'prop-types';

import MerchantItem from '../components/MerchantItem';

export class MerchantItemContainer extends Component {
  _editClickAction = (id) => {
    hashHistory.push(`/edit/${id}`);
  };

  render() {
    const {
      merchantItem,
      removeItemAction,
      sortBidsByName,
      sortBidsByAmount,
      sortBidsByDate
    } = this.props;

    return (
      <MerchantItem
        sortBidsByDate={ sortBidsByDate }
        sortBidsByName={ sortBidsByName }
        sortBidsByAmount={ sortBidsByAmount }
        merchantItem={ merchantItem }
        editAction={ this._editClickAction }
        removeItemAction={ removeItemAction }
      />
    );
  }
}

MerchantItemContainer.defaultProps = {
  merchantItem: {
    bids: []
  }
};

MerchantItemContainer.propTypes = {
  merchantItem: PropTypes.objectOf(PropTypes.any),
  removeItemAction: PropTypes.func.isRequired,
  sortBidsByName: PropTypes.func.isRequired,
  sortBidsByAmount: PropTypes.func.isRequired,
  sortBidsByDate: PropTypes.func.isRequired
};


export default MerchantItemContainer;
