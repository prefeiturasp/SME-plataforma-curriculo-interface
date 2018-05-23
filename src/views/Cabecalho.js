import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import estilos from './Cabecalho.css';

class Cabecalho extends Component {
  render() {
    return (
      <header className={estilos.cabecalho}>
        <h1>Currículo Digital da Cidade de São Paulo</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sequencias">Sequências de Atividades</NavLink>
          <NavLink to="/curriculo">Entenda o Currículo</NavLink>
          <NavLink to="/descobrir">O que vem por aí</NavLink>
        </nav>
      </header>
    );
  }
}

export default Cabecalho;
