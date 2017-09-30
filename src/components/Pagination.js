import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';


class Pagination extends Component {
  _renderPaginationNumbers(pageSize, listLength, page) {
    const { paginationAction } = this.props;
    const iterations = listLength / pageSize;
    let items = [];

    _.times(iterations, (index) => {
      const currentPage = index + 1;
      const activeClass = page === (currentPage) ? 'active' : '';

      items.push(
        <a
          role='button'
          onClick={ () => { paginationAction(currentPage); }}
          className={`pagination_number ${activeClass}`}
          key={ index }
          tabIndex={ index }
        >
          { index + 1 }
        </a>
      );
    });
    return items;
  }
  render() {
    const { pageSize, listLength, page } = this.props;

    return (
      <div className='pagination'>
        { this._renderPaginationNumbers(pageSize, listLength, page) }
      </div>
    );
  }
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  paginationAction: PropTypes.func.isRequired
};

export default Pagination;
