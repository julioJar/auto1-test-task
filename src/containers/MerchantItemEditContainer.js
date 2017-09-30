/* eslint radix: ["error", "as-needed"] */
import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMerchantItemAction } from '../actions';
import MerchantItemEdit from '../components/MerchantItemEdit';

class MerchantListContainer extends Component {
  componentDidMount() {
    const { merchantItemId, dispatchFetchMerchantItemAction } = this.props;

    dispatchFetchMerchantItemAction(merchantItemId);
  }
  render() {
    const { merchantItemData } = this.props;

    return (
      <MerchantItemEdit merchantItem={ merchantItemData } />
    );
  }
}

const mapStateToProps = (state) => {
  const path = _.get(state, 'routing.locationBeforeTransitions.pathname', '');
  const merchantItemId = path.split('/edit/')[1];

  return {
    merchantItemId,
    merchantItemData: _.get(state, 'merchantItem.item', {})
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchFetchMerchantItemAction: fetchMerchantItemAction
  }, dispatch);
};

MerchantListContainer.defaultProps = {
  merchantItemData: {}
};

MerchantListContainer.propTypes = {
  merchantItemData: PropTypes.objectOf(PropTypes.any),
  dispatchFetchMerchantItemAction: PropTypes.func.isRequired,
  merchantItemId: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantListContainer);
