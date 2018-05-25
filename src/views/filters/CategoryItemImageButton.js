import React, { Component } from 'react';
import styles from './CategoryItemButton.css';

class CategoryItemImageButton extends Component {
  render() {
    return (
      <li>
        <button className={styles.wrapper} onClick={this.props.onClick}>
          <img src={this.props.item.image} alt={this.props.item.label} />
        </button>
      </li>
    );
  }
}

export default CategoryItemImageButton;
