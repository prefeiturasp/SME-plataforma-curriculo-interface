import React, { Component } from 'react';
import styles from './CategoryButton.css';

class CategoryButton extends Component {
  render() {
    return (
      <li>
        <button className={styles.wrapper}>
          {this.props.category.label}
          <i className="fa fa-chevron-right"></i>
        </button>
      </li>
    );
  }
}

export default CategoryButton;
