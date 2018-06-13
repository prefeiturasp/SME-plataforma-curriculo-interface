import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import iconCloseBig from '../../images/iconCloseBig.svg';
import iconMenu from '../../images/iconMenu.svg';
import styles from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onClickedMenu = this.onClickedMenu.bind(this);
    this.onClickedClose = this.onClickedClose.bind(this);
    this.state = { isMenuExpanded: false };
  }

  onClickedMenu() {
    this.setState({ isMenuExpanded: true });
    this.props.showPopup();
  }

  onClickedClose() {
    this.setState({ isMenuExpanded: false });
    this.props.hidePopup();
  }
  
  render() {
    const classes = this.state.isMenuExpanded ? [styles.menu, styles.isMenuExpanded] : [styles.menu];

    const data = [
      {
        to: '/',
        label: 'Home',
        isSub: false,
      },
      {
        to: '/sequencias',
        label: 'Sequências de Atividades',
        isSub: false,
      },
      {
        to: '/curriculo',
        label: 'Currículo da Cidade',
        isSub: false,
      },
      {
        to: '/ods',
        label: 'Objetivos de Desenvolvimento Sustentável',
        isSub: true,
      },
      {
        to: '/matriz-de-saberes',
        label: 'Matriz de Saberes',
        isSub: true,
      },
      {
        to: '/objetivos-de-aprendizagem',
        label: 'Objetivos de Aprendizagem',
        isSub: true,
      },
      {
        to: '/descobrir',
        label: 'O que vem por aí',
        isSub: false,
      },
    ];

    const links = data.map((item, i) => {
      const klass = item.isSub ? styles.sub : null;
      return (
        <NavLink
          key={i}
          to={item.to}
          className={klass}
          onClick={this.onClickedClose}>
          {item.label}
        </NavLink>
      );
    })

    return (
      <header className={styles.wrapper}>
        <h1>Currículo Digital da Cidade de São Paulo</h1>
        <nav className={classes.join(' ')}>
          {links}
          <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
            <img src={iconCloseBig} alt="Fechar" />
          </button>
        </nav>
        <button className={styles.toggler} onClick={this.onClickedMenu.bind(this)}>
          <img src={iconMenu} alt="Menu" />
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  hidePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    hidePopup: () => {
      dispatch(BodyActions.hidePopup());
    },
    showPopup: () => {
      dispatch(BodyActions.showPopup());
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);
