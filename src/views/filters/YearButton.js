import React, { Component } from 'react';
import styles from './YearButton.css';

class YearButton extends Component {
  render() {
    return (
      <li>
        <button className={styles.wrapper}>
          {this.props.year.label}
        </button>
      </li>
    );
  }
}

export default YearButton;
