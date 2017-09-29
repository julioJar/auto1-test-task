import React, { Component } from 'react';

class MerchantItem extends Component {
  _renderListOfBids(bids) {
    return bids.map((bid) => {
      return (
        <div key={ bid.id } className='row'>
          <div className='cell'>
            { bid.carTitle }
          </div>
          <div className='cell'>
            { bid.amount }
          </div>
          <div className='cell'>
            { bid.created }
          </div>
        </div>
      );
    })
  }

  render() {
    const { merchantItem, editAction } = this.props;
    const {
      id,
      avatar_url,
      firstname,
      lastname,
      email,
      phone,
      bids
    } = merchantItem;

    return (
      <li>
        <div className='merchant_item'>
          <img className='merchant_item_image' alt='avatar' src={ avatar_url } />
          <div className='merchant_item_info'>
            <h3>{ firstname } { lastname }</h3>
            <a>{ email }</a>
            <a>{ phone }</a>
          </div>
          <button onClick={() => editAction(id)}  className='edit_btn'>Edit</button>
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

export default MerchantItem;
