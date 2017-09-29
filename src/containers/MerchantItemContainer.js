import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import PropTypes from 'prop-types';

import MerchantItem from '../components/MerchantItem';

class MerchantItemContainer extends Component {
  _editClickAction = (id) => {
    hashHistory.push(`/edit/${id}`);
  };

  render() {
    const { merchantItem } = this.props;

    return (
      <MerchantItem merchantItem={ merchantItem } editAction={ this._editClickAction } />
    );
  }
}

MerchantItemContainer.defaultProps = {
  merchantItem: {
    bids: []
  }
};

MerchantItemContainer.propTypes = {
  merchantItem: PropTypes.objectOf(PropTypes.any)
};

export default MerchantItemContainer;
