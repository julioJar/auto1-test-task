import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MerchantItemEdit extends Component {
  render() {
    const { merchantItem } = this.props;
    const {
      avatar_url,
      firstname,
      lastname,
      email,
      phone,
    } = merchantItem;
    return (
      <div className='merchant_item_wrapper edition'>
        <div className='merchant_item edition'>
          <img className='merchant_item_image' alt='avatar' src={ avatar_url } />
          <div className='merchant_item_info'>
            <h2>Full Name</h2>
            <input className='merchant_item_info__name' type='text' placeholder={`${firstname} ${lastname}`} />
            <h3>email</h3>
            <input className='merchant_item_info__email' type='text' placeholder={ email } />
            <h4>Phone</h4>
            <input className='merchant_item_info__phone' type='text' placeholder={ phone } />
          </div>
        </div>
        <button className='btn save'>Save</button>
        <button className='btn reset'>Reset</button>
        <p>You are not able to edit your car history, these would be available in v2</p>
      </div>
    );
  }
}

MerchantItemEdit.defaultProps = {
  children: null
};

MerchantItemEdit.propTypes = {
  merchantItem: PropTypes.objectOf(PropTypes.any).isRequired
};

export default MerchantItemEdit;
