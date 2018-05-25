import React, { Component } from 'react';
import styles from './CategoryItemButton.css';

class CategoryItemButton extends Component {
  render() {
    return (
      <li>
        <button className={styles.wrapper} onClick={this.props.onClick}>
          <div className={styles.check}>
            <div className={styles.checkMark}></div>
          </div>
          {this.props.item.label}
        </button>
      </li>
    );
  }
}

export default CategoryItemButton;
