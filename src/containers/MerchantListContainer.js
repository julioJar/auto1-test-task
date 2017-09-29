import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchListOfMerchantsAction } from '../actions';
import MerchantItemContainer from './MerchantItemContainer';

class MerchantListContainer extends Component {
  componentDidMount() {
    const { dispatchFetchListOfMerchantsAction } = this.props;

    dispatchFetchListOfMerchantsAction();
  }

  _renderListOfMerchants(merchantsListData) {
    return merchantsListData && _.map(merchantsListData, (merchantItem) => {
      return (
        <MerchantItemContainer key={ merchantItem.id } merchantItem={ merchantItem } />
      );
    })
  }

  render() {
    const { merchantsList } = this.props;

    return (
      <ul>
        { this._renderListOfMerchants(merchantsList) }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
  merchantsList: state.merchantsList.list
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchFetchListOfMerchantsAction: fetchListOfMerchantsAction
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantListContainer);
