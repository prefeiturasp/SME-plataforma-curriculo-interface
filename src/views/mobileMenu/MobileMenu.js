import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import BodyActions from '../../actions/BodyActions';
import iconCloseBig from '../../images/iconCloseBig.svg';
import styles from './MobileMenu.scss';

class MobileMenu extends Component {
  target = null;

  componentDidMount() {
    this.target = document.querySelector('#mobileMenu');
  }

  componentDidUpdate(prevProps) {
    if (this.props.hasMobileMenu && !prevProps.hasMobileMenu) {
      disableBodyScroll(this.target);
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  onClickedClose = () => {
    enableBodyScroll(this.target);
    this.props.hideMobileMenu();
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
      <nav className={classes.join(' ')} id="mobileMenu">
        {links}
        <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
          <img src={iconCloseBig} alt="Fechar" />
        </button>
      </nav>
    );
  }
}

MobileMenu.propTypes = {
  hasMobileMenu: PropTypes.bool,
  hideMobileMenu: PropTypes.func.isRequired,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
