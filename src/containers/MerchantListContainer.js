import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchListOfMerchantsAction } from '../actions';
import MerchantsList from '../components/MerchantsList';

class MerchantListContainer extends Component {
  componentDidMount() {
    const { dispatchFetchListOfMerchantsAction } = this.props;

    dispatchFetchListOfMerchantsAction();
  }

  render() {
    return (
      <MerchantsList />
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing
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
