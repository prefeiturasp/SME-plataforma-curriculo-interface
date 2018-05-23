import React, { Component } from 'react';
import estilos from './Rodape.css';

class Rodape extends Component {
  render() {
    return (
      <footer className={estilos.rodape}>
        <img src="http://via.placeholder.com/218x129" alt="Unesco - Cooperação - Representação no Brasil" />
        <img src="http://via.placeholder.com/130x106" alt="Prefeitura de São Paulo - Educação" />
      </footer>
    );
  }
}

export default Rodape;
