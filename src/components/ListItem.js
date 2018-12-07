import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <li className={styles.wrapper}>
        {this.props.string}
      </li>
    );
  }
}

ListItem.propTypes = {
  string: PropTypes.string.isRequired,
};

export default ListItem;
