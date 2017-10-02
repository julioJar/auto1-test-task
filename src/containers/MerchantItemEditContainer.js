/* eslint radix: ["error", "as-needed"] */
import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import uuidv4 from 'uuid/v4';

import { fetchMerchantItemAction } from '../actions';
import MerchantItemEdit from '../components/MerchantItemEdit';
import { putMerchantItem, addMerchantItem } from '../APIMock/serverActions';

export class MerchantItemEditContainer extends Component {
  componentDidMount() {
    const { merchantItemId, dispatchFetchMerchantItemAction } = this.props;

    this.newItemid = uuidv4();
    dispatchFetchMerchantItemAction(merchantItemId);
  }

  _saveEditAction = (state, { id, avatar_url, bids }) => {
    const editedMerchantItemObject = _.assign({}, state, {
      id,
      avatar_url,
      bids
    });

    putMerchantItem(editedMerchantItemObject).then(() => {
      hashHistory.push('/list');
    });
  };

  _addMerchantAction = (state, { id, avatar_url, bids }) => {
    const addMerchantItemObject = _.assign({}, state, {
      id,
      avatar_url,
      bids
    });

    addMerchantItem(addMerchantItemObject).then(() => {
      hashHistory.push('/list');
    });
  };

  render() {
    const { merchantItemData } = this.props;
    const { mode } = this.props.route;
    if (mode === 'add') {
      const newItemData = {
        id: this.newItemid,
        avatar_url: 'https://avatars.io/static/default_128.jpg',
        bids: []
      };
      return (
        <MerchantItemEdit
          merchantItem={ newItemData }
          action={ this._addMerchantAction }
        />
      );
    }
    return (
      <MerchantItemEdit
        merchantItem={ merchantItemData }
        action={ this._saveEditAction }
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

MerchantItemEditContainer.defaultProps = {
  merchantItemData: {},
  merchantItemId: null
};

MerchantItemEditContainer.propTypes = {
  merchantItemData: PropTypes.objectOf(PropTypes.any),
  dispatchFetchMerchantItemAction: PropTypes.func.isRequired,
  merchantItemId: PropTypes.string,
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantItemEditContainer);
