import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import getWindowWidth from '../util/getWindowWidth';
import iconCloseBig from '../../images/iconCloseBig.svg';
import iconMenu from '../../images/iconMenu.svg';
import iconMenuWhite from '../../images/iconMenuWhite.svg';
import logoColor from '../../images/logo.svg';
import logoWhite from '../../images/logoWhite.svg';
import styles from './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onClickedMenu = this.onClickedMenu.bind(this);
    this.onClickedClose = this.onClickedClose.bind(this);
    this.state = { isMenuExpanded: false };
  }

  onClickedMenu() {
    this.setState({ isMenuExpanded: true });

    if (getWindowWidth() < 768) {
      this.props.showPopup();
    }
  }

  onClickedClose() {
    this.setState({ isMenuExpanded: false });
    this.props.hidePopup();
  }
  
  render() {
    const classes = this.state.isMenuExpanded ? [styles.wrapper, styles.isMenuExpanded] : [styles.wrapper];

    const icon = this.props.isHome && !this.props.hasScrolled ? iconMenuWhite : iconMenu;
    const logo = this.props.isHome && !this.props.hasScrolled ? logoWhite : logoColor;

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
      {
        div: true,
      },
      {
        to: '/perfil',
        label: 'Meu perfil',
        isSub: false,
      },
      {
        to: '/sair',
        label: 'Sair',
        isSub: false,
      },
    ];

    const links = data.map((item, i) => {
      if (item.div) {
        return <hr key={i} />;
      } else {
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
      }
    })

    return (
      <Headroom disableInlineStyles>
        <header className={classes.join(' ')}>
          <NavLink to="/">
            <div className={styles.logo}>
              <img src={logo} alt="Currículo Digital da Cidade de São Paulo" />
              <h1>Currículo Digital da Cidade de São Paulo</h1>
            </div>
          </NavLink>
          <nav className={styles.menu}>
            {links}
            <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
              <img src={iconCloseBig} alt="Fechar" />
            </button>
          </nav>
          <button className={styles.toggler} onClick={this.onClickedMenu.bind(this)}>
            <img src={icon} alt="Menu" />
          </button>
        </header>
      </Headroom>
    );
  }
}

Header.propTypes = {
  hasScrolled: PropTypes.bool.isRequired,
  isHome: PropTypes.bool.isRequired,
  hidePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    hasScrolled: state.BodyReducer.hasScrolled,
    isHome: state.BodyReducer.isHome,
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
