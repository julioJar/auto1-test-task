import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import moment from 'moment';

import currencyFormatter from '../utils/currencyFormatter';

class MerchantItem extends Component {
  _renderListOfBids(bids) {
    return bids && _.map(bids, (bid) => {
      return (
        <div key={ bid.id } className='row'>
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
          <button onClick={() => editAction(id)}  className='btn edit'>Edit</button>
          <button onClick={() => removeItemAction(id)} className='btn edit'>delete</button>
        </div>
        <div className='table'>
          <div className='row header'>
            <div className='cell'>
              Car title
            </div>
            <div className='cell'>
              Ammount
            </div>
            <div className='cell'>
              Created
            </div>
          </div>
          { this._renderListOfBids(bids) }
        </div>
      </li>
    );
  }
}

MerchantItem.propTypes = {
  merchantItem: PropTypes.objectOf(PropTypes.any).isRequired,
  editAction: PropTypes.func.isRequired,
  removeItemAction: PropTypes.func.isRequired
};

export default MerchantItem;
