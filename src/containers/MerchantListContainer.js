/* eslint radix: ["error", "as-needed"] */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchListOfMerchantsAction } from '../actions';
import MerchantItemContainer from './MerchantItemContainer';
import loader from '../assets/loader.gif';

const pageSize = 3;

class MerchantListContainer extends Component {
  componentDidMount() {
    const { dispatchFetchListOfMerchantsAction, page } = this.props;

    dispatchFetchListOfMerchantsAction(pageSize, page);
  }

  componentWillReceiveProps(nextProps) {
    const {  page } = this.props;
    const nextPage = nextProps.page;
    const { dispatchFetchListOfMerchantsAction } = nextProps;

    if (page !== nextPage) {
      dispatchFetchListOfMerchantsAction(pageSize, nextPage);
    }
  }

  _renderListOfMerchants(merchantsListData) {
    return merchantsListData && _.map(merchantsListData, (merchantItem) => {
      return (
        <MerchantItemContainer key={ merchantItem.id } merchantItem={ merchantItem } />
      );
    });
  }

  render() {
    const { merchantsList, loading } = this.props;

    if (loading) {
      return (
        <img className='loader' alt='loading gif' src={ loader } />
      );
    }
    return (
      <ul className="merchants_list">
        { this._renderListOfMerchants(merchantsList) }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const merchantsList = _.get(state.merchantsList, 'list', []);
  const page = parseInt(_.get(state.routing, 'locationBeforeTransitions.query.page', 1));

  return {
    loading: state.merchantsList.loading,
    page,
    merchantsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchFetchListOfMerchantsAction: fetchListOfMerchantsAction
  }, dispatch);
};

MerchantListContainer.defaultProps = {
  page: 0,
  merchantsList: []
};

MerchantListContainer.propTypes = {
  dispatchFetchListOfMerchantsAction: PropTypes.func.isRequired,
  page: PropTypes.number,
  merchantsList: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantListContainer);
