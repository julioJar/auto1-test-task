import React, { Component } from 'react';
import MerchantItem from '../components/MerchantItem';

class MerchantItemContainer extends Component {
  render() {
    const { merchantItem } = this.props;

    return (
      <MerchantItem merchantItem={ merchantItem }/>
    );
  }
}

export default MerchantItemContainer;
