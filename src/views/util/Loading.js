import React, { Component } from 'react';
import iconLoading from '../../images/iconLoading.png';
import styles from './Loading.css';

class Loading extends Component {
  render() {
    return (
      <img
        className={styles.wrapper}
        src={iconLoading}
        alt="Carregando" />
    );
  }
}

export default Loading;
