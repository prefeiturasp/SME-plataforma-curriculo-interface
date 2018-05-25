import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryItemButton.css';

class CategoryItemImageButton extends Component {
  render() {
    return (
      <li>
        <button className={styles.wrapper} onClick={this.props.onClick}>
          <img src={this.props.data.image} alt={this.props.data.label} />
        </button>
      </li>
    );
  }
}

CategoryItemImageButton.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.object.isRequired,
};

export default CategoryItemImageButton;
