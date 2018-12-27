import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from 'views/profile/Avatar';
import BodyActions from 'actions/BodyActions';
import isLogged from 'data/isLogged';
import styles from './Header.scss';

class Header extends Component {
  onClickedToggler = () => {
    this.props.showMobileMenu();
  };

  render() {
    const data = [
      {
        to: '/',
        label: 'Home',
      },
      {
        to: '/sequencias',
        label: 'Sequências de Atividades',
      },
      {
        to: '/curriculo',
        label: 'Currículo da Cidade',
      },
      {
        to: '/descobrir',
        label: 'O que vem por aí',
      },
    ];

    const links = data.map((item, i) => {
      return (
        <NavLink key={i} to={item.to} onClick={this.onClickedClose}>
          {item.label}
        </NavLink>
      );
    });

    const avatar = isLogged() ? (
      <Avatar nickname="Marília" size={35} />
    ) : null;

    const btnLogin = (
      <button>Login</button>
    );

    return (
      <Headroom disableInlineStyles>
        <header className={styles.wrapper}>
          <NavLink to="/">
            <div className={styles.logo}>
              <span className={styles.logoImage} />
              <h1>Currículo Digital da Cidade de São Paulo</h1>
            </div>
          </NavLink>
          <nav className={styles.menu}>
            {links}
            {avatar || btnLogin}
          </nav>
          <div className={styles.toggler}>
            {avatar}
            <button onClick={this.onClickedToggler} />
          </div>
        </header>
      </Headroom>
    );
  }
}

Header.propTypes = {
  showMobileMenu: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    showMobileMenu: () => {
      dispatch(BodyActions.showMobileMenu());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
