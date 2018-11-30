import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import AuthActions from '../../actions/AuthActions';
import BodyActions from '../../actions/BodyActions';
import iconCloseBig from '../../images/iconCloseBig.svg';
import styles from './MobileMenu.scss';

class MobileMenu extends Component {
  target = null;

  onClickedClose = () => {
    enableBodyScroll(this.target);
    this.props.hideMobileMenu();
  }

  onClickedLogin = () => {
    this.props.login();
  }

  onClickedLogout = () => {
    this.props.logout();
  }
  
  componentDidMount() {
    this.target = document.querySelector('#mobileMenu');
    this.props.setup();
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate', this.props.hasLogged);
    if (this.props.hasMobileMenu && !prevProps.hasMobileMenu) {
      disableBodyScroll(this.target);
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const classes = this.props.hasMobileMenu ? [styles.wrapper, styles.isExpanded] : [styles.wrapper];

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
    });

    const buttons = this.props.hasLogged
      ? <div>
          <NavLink
            to="perfil"
            onClick={this.onClickedClose}>
            Meu perfil
          </NavLink>
          <button onClick={this.onClickedLogout}>
            Sair
          </button>
        </div>
      : <div>
          <p>Salve sequências de atividades. E acesse em qualquer lugar.</p>
          <button
            className={styles.btn}
            onClick={this.onClickedLogin}
          >
            Login
          </button>
          <p>Esta funcionalidade é exclusiva para professores da <a href="https://sme.prefeitura.sp.gov.br/" target="_blank" rel="noreferrer noopener">Secretaria Municipal de Educação</a> da Prefeitura de São Paulo.</p>
        </div>;

    return (
      <nav className={classes.join(' ')} id="mobileMenu">
        {links}
        <hr/>
        {buttons}
        <button className={styles.close} onClick={this.onClickedClose}>
          <img src={iconCloseBig} alt="Fechar" />
        </button>
      </nav>
    );
  }
}

MobileMenu.propTypes = {
  hasLogged: PropTypes.bool,
  hasMobileMenu: PropTypes.bool,
  hideMobileMenu: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  setup: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    hasLogged: state.AuthReducer.hasLogged,
    hasMobileMenu: state.BodyReducer.hasMobileMenu,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideMobileMenu: () => {
      dispatch(BodyActions.hideMobileMenu());
    },
    login: () => {
      dispatch(AuthActions.login());
    },
    logout: () => {
      dispatch(AuthActions.logout());
    },
    setup: () => {
      dispatch(AuthActions.setup());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
