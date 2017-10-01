import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MerchantItemEdit extends Component {
  constructor() {
    super();
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      phone: null
    };
  }

  render() {
    const { merchantItem, saveEditAction } = this.props;
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
      <div className='merchant_item_wrapper edition'>
        <div className='merchant_item edition'>
          <img className='merchant_item_image' alt='avatar' src={ avatar_url } />
          <div className='merchant_item_info'>
            <h2>First Name</h2>
            <input
              onInput={(event) => {
                this.setState({ firstname: event.target.value });
              }}
              value={ this.state.firstname || ''}
              className='merchant_item_info__name'
              type='text'
              placeholder={ firstname }
            />
            <h2>Last Name</h2>
            <input
              onInput={(event) => {
                this.setState({ lastname: event.target.value });
              }}
              value={ this.state.lastname || ''}
              className='merchant_item_info__name'
              type='text'
              placeholder={ lastname }
            />
            <h3>email</h3>
            <input
              onInput={(event) => {
                this.setState({ email: event.target.value });
              }}
              value={ this.state.email || '' }
              className='merchant_item_info__email'
              type='text'
              placeholder={ email }
            />
            <h4>Phone</h4>
            <input
              onInput={(event) => {
                this.setState({ phone: event.target.value });
              }}
              value={ this.state.phone || '' }
              className='merchant_item_info__phone'
              type="number"
              placeholder={ phone }
            />
          </div>
        </div>
        <button onClick={() => saveEditAction(this.state, { id, avatar_url, bids })} className='btn save'>Save</button>
        <button
          onClick={() => this.setState({
            fullName: null,
            email: null,
            phone: null
          })}
          className='btn reset'
        >
          Reset
        </button>
        <p>You are not able to edit your car history, these would be available in v2</p>
      </div>
    );
  }
}

MerchantItemEdit.defaultProps = {
  children: null
};

MerchantItemEdit.propTypes = {
  merchantItem: PropTypes.objectOf(PropTypes.any).isRequired,
  saveEditAction: PropTypes.func.isRequired
};

export default MerchantItemEdit;
