import React, { Component } from 'react';
import logoPrefecture from '../../images/logoPrefecture.png';
import logoUnesco from '../../images/logoUnesco.png';
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.wrapper}>
        <img src={logoUnesco} alt="Unesco - Cooperação - Representação no Brasil" />
        <img src={logoPrefecture} alt="Prefeitura de São Paulo - Educação" />
      </footer>
    );
  }
}

export default Footer;
