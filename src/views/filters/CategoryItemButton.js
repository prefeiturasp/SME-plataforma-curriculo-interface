import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryItemButton.css';

class CategoryItemButton extends Component {
  render() {
    return (
      <li>
        <button className={styles.wrapper} onClick={this.props.onClick}>
          <div className={styles.check}>
            <div className={styles.checkMark}></div>
          </div>
          {this.props.data.label}
        </button>
      </li>
    );
  }
}

CategoryItemButton.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.object.isRequired,
};

export default CategoryItemButton;
