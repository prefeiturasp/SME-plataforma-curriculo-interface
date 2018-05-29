import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BookItem.css';

class BookItem extends Component {
  render() {
    return (
      <li className={styles.wrapper}>
        {this.props.data.name}
      </li>
    );
  }
}

BookItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BookItem;
