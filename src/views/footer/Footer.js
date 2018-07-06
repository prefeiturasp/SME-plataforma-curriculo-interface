import React, { Component } from 'react';
import logoPrefecture from '../../images/logoPrefecture.png';
import logoPrefecture2x from '../../images/logoPrefecture@2x.png';
import logoUnesco from '../../images/logoUnesco.png';
import logoUnesco2x from '../../images/logoUnesco@2x.png';
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.wrapper}>
        <img
          src={logoUnesco}
          srcSet={`${logoUnesco}, ${logoUnesco2x} 2x`}
          alt="Unesco - Cooperação - Representação no Brasil" />
        <img
          src={logoPrefecture}
          srcSet={`${logoPrefecture}, ${logoPrefecture2x} 2x`}
          alt="Prefeitura de São Paulo - Educação" />
      </footer>
    );
  }
}

export default Footer;
