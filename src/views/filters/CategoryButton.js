import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryButton.css';

class CategoryButton extends Component {
  render() {
    return (
      <li>
        <button className={styles.wrapper} onClick={this.props.onClick}>
          {this.props.data.label}
          <i className="fa fa-chevron-right"></i>
        </button>
      </li>
    );
  }
}

CategoryButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CategoryButton;
