import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import iconMenu from '../../images/iconMenu.svg';
import styles from './Header.css';

class Header extends Component {
  onClickedMenu() {
    
  }
  
  render() {
    return (
      <header className={styles.wrapper}>
        <h1>Currículo Digital da Cidade de São Paulo</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sequencias">Sequências de Atividades</NavLink>
          <NavLink to="/curriculo">Entenda o Currículo</NavLink>
          <NavLink to="/descobrir">O que vem por aí</NavLink>
        </nav>
        <button className={styles.menu} onClick={this.onClickedMenu.bind(this)}>
          <img src={iconMenu} alt="Menu" />
        </button>
      </header>
    );
  }
}

export default Header;
