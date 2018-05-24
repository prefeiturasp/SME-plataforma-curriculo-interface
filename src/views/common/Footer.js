import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <img src="http://via.placeholder.com/218x129" alt="Unesco - Cooperação - Representação no Brasil" />
        <img src="http://via.placeholder.com/130x106" alt="Prefeitura de São Paulo - Educação" />
      </footer>
    );
  }
}

export default Footer;
