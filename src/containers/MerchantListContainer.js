/* eslint radix: ["error", "as-needed"] */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { hashHistory } from 'react-router';

import { fetchListOfMerchantsAction, removeMerchantItem } from '../actions';
import MerchantItemContainer from './MerchantItemContainer';
import loader from '../assets/loader.gif';
import Pagination from '../components/Pagination';

const pageSizeFallback = 3;

export class MerchantListContainer extends Component {
  componentDidMount() {
    const { dispatchFetchListOfMerchantsAction, page } = this.props;

    dispatchFetchListOfMerchantsAction(this._pageSize(), page);
  }

  componentWillReceiveProps(nextProps) {
    const { page } = this.props;
    const nextPage = nextProps.page;
    const { dispatchFetchListOfMerchantsAction } = nextProps;

    if (page !== nextPage) {
      dispatchFetchListOfMerchantsAction(this._pageSize(), nextPage);
    }
  }

  _pageSize = () => {
    const pageSizeQuery = _.get(this.props, 'location.query.size', null);
    const pageSize = (pageSizeQuery && parseInt(pageSizeQuery)) || pageSizeFallback;

    return pageSize;
  };

  _renderListOfMerchants(merchantsListData) {
    return merchantsListData && _.map(merchantsListData, (merchantItem) => {
      return (
        <MerchantItemContainer
          key={ merchantItem.id }
          merchantItem={ merchantItem }
          removeItemAction={ this._removeMerchanItemAction }
        />
      );
    });
  }

  _paginationAction = (page) => {
    hashHistory.push(`/list?page=${page}`);
  };

  _removeMerchanItemAction = (id) => {
    const { dispatchRemoveMerchantItem } = this.props;

    dispatchRemoveMerchantItem(id);
  }

  render() {
    const { merchantsList, loading, listLength, page } = this.props;

    if (loading) {
      return (
        <img className='loader' alt='loading gif' src={ loader } />
      );
    }
    return (
      <ul className="merchants_list">
        { this._renderListOfMerchants(merchantsList) }
        <Pagination
          pageSize={ this._pageSize() }
          listLength={ listLength }
          page={ page }
          paginationAction={ this._paginationAction }
        />
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
    merchantsList,
    listLength: state.merchantsList.listLength
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchFetchListOfMerchantsAction: fetchListOfMerchantsAction,
    dispatchRemoveMerchantItem: removeMerchantItem
  }, dispatch);
};

MerchantListContainer.defaultProps = {
  page: 0,
  merchantsList: [],
  loading: false
};

MerchantListContainer.propTypes = {
  dispatchFetchListOfMerchantsAction: PropTypes.func.isRequired,
  dispatchRemoveMerchantItem: PropTypes.func.isRequired,
  page: PropTypes.number,
  merchantsList: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool,
  listLength: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantListContainer);
