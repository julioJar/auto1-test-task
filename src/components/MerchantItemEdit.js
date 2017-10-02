import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class MerchantItemEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      hasPremium: _.get(props, 'merchantItem.hasPremium', false)
    };
  }

  render() {
    const { merchantItem, action } = this.props;
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
      <div className={`merchant_item_wrapper edition ${this.state.hasPremium ? 'hasPremium' : ''}`}>
        <div className='merchant_item'>
          <img className='merchant_item_image' alt='avatar' src={ avatar_url } />
          <div className='merchant_item_info'>
            <h2>First Name</h2>
            <input
              onInput={(event) => {
                this.setState({ firstname: event.target.value });
              }}
              id='firstname'
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
              id='lastname'
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
              id='email'
              value={ this.state.email || '' }
              className='merchant_item_info__email'
              type='email'
              placeholder={ email }
            />
            <h3>Phone</h3>
            <input
              id='phone'
              onInput={(event) => {
                this.setState({ phone: event.target.value });
              }}
              value={ this.state.phone || '' }
              className='merchant_item_info__phone'
              type="tel"
              placeholder={ phone }
            />
            <h4>Are you premium?</h4>
            <div>
              <input
                onChange={(event) => {
                  this.setState({ hasPremium: event.target.checked });
                }}
                id='hasPremium'
                className='merchant_item_info__hasPremium'
                checked={ this.state.hasPremium }
                type="checkbox"
              />
            </div>
          </div>
        </div>
        <button onClick={() => action(this.state, { id, avatar_url, bids })} className='btn save'>Save</button>
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
        <p>You are not able to add / edit your car history, these would be available in v2</p>
      </div>
    );
  }
}

MerchantItemEdit.defaultProps = {
  children: null
};

MerchantItemEdit.propTypes = {
  merchantItem: PropTypes.objectOf(PropTypes.any).isRequired,
  action: PropTypes.isRequired
};

export default MerchantItemEdit;
