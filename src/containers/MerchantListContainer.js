import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
    })
  }

  render() {
    const { merchantsList, loading } = this.props;
    console.log(this.props);

    if (loading) {
      return <img className='loader' alt='loading gif' src={ loader }/>
    }
    return (
      <ul className="merchants_list">
        { this._renderListOfMerchants(merchantsList) }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const merchantsList = _.get(state.merchantsList, 'list', []);
  const page = _.get(state.routing, 'locationBeforeTransitions.query.page', 1);

  return {
    loading: state.merchantsList.loading,
    page,
    merchantsList
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchFetchListOfMerchantsAction: fetchListOfMerchantsAction
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantListContainer);
