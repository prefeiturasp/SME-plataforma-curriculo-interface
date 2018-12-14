import React, { Component } from 'react';
import styles from './ModalPage.scss';

class ModalPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default ModalPage;
