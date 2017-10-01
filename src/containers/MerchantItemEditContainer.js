/* eslint radix: ["error", "as-needed"] */
import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';

import { fetchMerchantItemAction } from '../actions';
import MerchantItemEdit from '../components/MerchantItemEdit';
import { putMerchantItem } from '../APIMock/serverActions';

class MerchantListContainer extends Component {
  componentDidMount() {
    const { merchantItemId, dispatchFetchMerchantItemAction } = this.props;

    dispatchFetchMerchantItemAction(merchantItemId);
  }

  _saveEditAction = (state, { id, avatar_url, bids }) => {
    const editedMerchantItem = _.assign({}, state, {
      id,
      avatar_url,
      hasPremium: false,
      bids
    });

    putMerchantItem(editedMerchantItem).then(() => {
      hashHistory.push('/list');
    });
  };

  render() {
    const { merchantItemData } = this.props;

    return (
      <MerchantItemEdit
        merchantItem={ merchantItemData }
        saveEditAction={ this._saveEditAction }
      />
    );
  }
}

const mapStateToProps = (state) => {
  const path = _.get(state, 'routing.locationBeforeTransitions.pathname', '');
  const merchantItemId = path.split('/edit/')[1];

  return {
    merchantItemId,
    page: _.get(state, 'merchantItem.page', {}),
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
  merchantItemId: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantListContainer);
