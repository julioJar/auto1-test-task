import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import moment from 'moment';

import currencyFormatter from '../utils/currencyFormatter';

export class MerchantItem extends Component {
  _renderListOfBids(bids) {
    return bids && _.map(bids, (bid) => {
      return (
        <div key={ bid.id } className='row bidItem'>
          <div className='cell'>
            { bid.carTitle }
          </div>
          <div className='cell'>
            { currencyFormatter(bid.amount) }
          </div>
          <div className='cell'>
            { moment(new Date(bid.created)).format('MMM Do YY') }
          </div>
        </div>
      );
    });
  }

  _renderBidsTable(bids) {
    const { sortBidsByName, merchantItem, sortBidsByAmount, sortBidsByDate } = this.props;
    const { id } = merchantItem;

    if (bids.length) {
      return (
        <div className='table'>
          <div className='row header'>
            <div className='cell'>
              <a role='button' tabIndex='0' onClick={ () => sortBidsByName(id)}>Car title</a>
            </div>
            <div className='cell'>
              <a role='button' tabIndex='0' onClick={() => sortBidsByAmount(id)}>Ammount </a>
            </div>
            <div className='cell'>
              <a role='button' tabIndex='0' onClick={() => sortBidsByDate(id)}>Created</a>
            </div>
          </div>
          { this._renderListOfBids(bids) }
        </div>
      );
    }

    return (
      <p>There is no Bids history</p>
    );
  }

  render() {
    const { merchantItem, editAction, removeItemAction } = this.props;
    const {
      id,
      avatar_url,
      firstname,
      hasPremium,
      lastname,
      email,
      phone,
      bids
    } = merchantItem;

    const wrapperContainerClasses = hasPremium ? 'merchant_item_wrapper hasPremium' : 'merchant_item_wrapper';

    return (
      <li className={ wrapperContainerClasses }>
        { hasPremium }
        <div className='merchant_item'>
          <img className='merchant_item_image' alt='avatar' src={ avatar_url } />
          <div className='merchant_item_info'>
            <h3>{ firstname } { lastname }</h3>
            <a>{ email }</a>
            <a>{ phone }</a>
          </div>
          <div className='merchant_item_buttonContainer'>
            <button onClick={() => editAction(id)}  className='btn edit'>Edit</button>
            <button onClick={() => removeItemAction(id)} className='btn delete'>delete</button>
          </div>
        </div>
        { this._renderBidsTable(bids) }
      </li>
    );
  }
}

MerchantItem.propTypes = {
  merchantItem: PropTypes.objectOf(PropTypes.any).isRequired,
  editAction: PropTypes.func.isRequired,
  removeItemAction: PropTypes.func.isRequired,
  sortBidsByName: PropTypes.func.isRequired,
  sortBidsByAmount: PropTypes.func.isRequired,
  sortBidsByDate: PropTypes.func.isRequired
};

export default MerchantItem;
