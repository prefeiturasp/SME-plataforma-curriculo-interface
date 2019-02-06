import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BodyActions from 'actions/BodyActions';
import LoginActions from 'actions/LoginActions';
import MobileModal from 'components/layout/MobileModal';
import createModalLink from 'utils/createModalLink';
import isLogged from 'data/isLogged';
import iconCloseBig from 'images/icons/closeBig.svg';
import styles from './MobileMenu.scss';

class MobileMenu extends React.PureComponent {
  target = null;

  onClickedClose = () => {
    this.props.hideMobileMenu();
  };

  onClickedLogout = () => {
    this.props.logout();
  };

  render() {
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
      const klass = item.isSub ? styles.btnSmall : styles.btn;
      return (
        <NavLink
          key={i}
          to={item.to}
          className={klass}
          onClick={this.onClickedClose}
        >
          {item.label}
        </NavLink>
      );
    });

    const link = createModalLink('/login');

    const buttons = isLogged() ? (
      <div>
        <NavLink
          to="/perfil"
          className={styles.btn}
          onClick={this.onClickedClose}
        >
          Meu perfil
        </NavLink>
        <button className={styles.btn} onClick={this.onClickedLogout}>
          Sair
        </button>
      </div>
    ) : (
      <div className={styles.login}>
        <h3>
          Salve sequências de atividades.
          <br />E acesse em qualquer lugar.
        </h3>
        <NavLink className={styles.btnLogin} to={link}>
          Login
        </NavLink>
        <p className={styles.obs}>
          Esta funcionalidade é exclusiva para professores da{' '}
          <a
            href="https://sme.prefeitura.sp.gov.br/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Secretaria Municipal de Educação
          </a>{' '}
          da Prefeitura de São Paulo.
        </p>
      </div>
    );

    return (
      <MobileModal htmlId="mobileMenu" isExpanded={this.props.hasMobileMenu}>
        <nav className={styles.wrapper} id="mobileMenu">
          {links}
          <hr />
          {buttons}
          <button className={styles.close} onClick={this.onClickedClose}>
            <img src={iconCloseBig} alt="Fechar" />
          </button>
        </nav>
      </MobileModal>
    );
  }
}

MobileMenu.propTypes = {
  hasMobileMenu: PropTypes.bool,
  hideMobileMenu: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    hasMobileMenu: state.BodyReducer.hasMobileMenu,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideMobileMenu: () => {
      dispatch(BodyActions.hideMobileMenu());
    },
    logout: () => {
      dispatch(LoginActions.logout());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenu);
