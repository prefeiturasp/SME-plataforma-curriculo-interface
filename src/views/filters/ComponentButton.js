import React, { Component } from 'react';
import styles from './ComponentButton.css';

class ComponentButton extends Component {
  render() {
    return (
      <li>
        <button className={styles.wrapper} onClick={this.props.onClick}>
          {this.props.component.label}
        </button>
      </li>
    );
  }
}

export default ComponentButton;
