import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from 'j-toker';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { API_URL } from '../../constants';
import BodyActions from '../../actions/BodyActions';
import iconCloseBig from '../../images/iconCloseBig.svg';
import styles from './MobileMenu.scss';

class MobileMenu extends Component {
  target = null;

  handleLogoutClick = () => {
    Auth.configure({
      apiUrl:                API_URL + '/api',
      signOutPath:           '/auth/sign_out',
      emailSignInPath:       '/auth/sign_in',
      emailRegistrationPath: '/auth',
      accountUpdatePath:     '/auth',
      accountDeletePath:     '/auth',
      passwordResetPath:     '/auth/password',
      passwordUpdatePath:    '/auth/password',
      tokenValidationPath:   '/auth/validate_token',
      proxyIf:               function() { return false; },
      proxyUrl:              '/proxy',
      validateOnPageLoad:    false,
      forceHardRedirect:     false,
      storage:               'cookies',
      cookieExpiry:          14,
      cookiePath:            '/',

      passwordResetSuccessUrl: function() {
        return window.location.href;
      },

      confirmationSuccessUrl:  function() {
        return window.location.href;
      },

      tokenFormat: {
        "access-token": "{{ access-token }}",
        "token-type":   "Bearer",
        client:         "{{ client }}",
        expiry:         "{{ expiry }}",
        uid:            "{{ uid }}",
      },

      parseExpiry: function(headers){
        // convert from ruby time (seconds) to js time (millis)
        return (parseInt(headers['expiry'], 10) * 1000) || null;
      },

      handleLoginResponse: function(resp) {
        return resp.data;
      },

      handleAccountUpdateResponse: function(resp) {
        return resp.data;
      },

      handleTokenValidationResponse: function(resp) {
        return resp.data;
      },

      authProviderPaths: {
        saml:    '/auth/saml',
      }
    });

    Auth.signOut();
  }

  handleAuthClick = () => {
    Auth.configure({
      apiUrl:                API_URL + '/api',
      signOutPath:           '/auth/sign_out',
      emailSignInPath:       '/auth/sign_in',
      emailRegistrationPath: '/auth',
      accountUpdatePath:     '/auth',
      accountDeletePath:     '/auth',
      passwordResetPath:     '/auth/password',
      passwordUpdatePath:    '/auth/password',
      tokenValidationPath:   '/auth/validate_token',
      proxyIf:               function() { return false; },
      proxyUrl:              '/proxy',
      validateOnPageLoad:    false,
      forceHardRedirect:     false,
      storage:               'cookies',
      cookieExpiry:          14,
      cookiePath:            '/',

      passwordResetSuccessUrl: function() {
        return window.location.href;
      },

      confirmationSuccessUrl:  function() {
        return window.location.href;
      },

      tokenFormat: {
        "access-token": "{{ access-token }}",
        "token-type":   "Bearer",
        client:         "{{ client }}",
        expiry:         "{{ expiry }}",
        uid:            "{{ uid }}",
      },

      parseExpiry: function(headers){
        // convert from ruby time (seconds) to js time (millis)
        return (parseInt(headers['expiry'], 10) * 1000) || null;
      },

      handleLoginResponse: function(resp) {
        return resp.data;
      },

      handleAccountUpdateResponse: function(resp) {
        return resp.data;
      },

      handleTokenValidationResponse: function(resp) {
        return resp.data;
      },

      authProviderPaths: {
        saml:    '/auth/saml',
      }
    });

    var provider = 'saml';
    Auth.oAuthSignIn({
      provider: provider,
      config: this.props.config,
      params: {
        namespace_name: 'api',
        resource_class: 'User',
      }
    })
    .then(function(user) {
      console.log("The user is logged in");
      console.log(user);
      sessionStorage.setItem('user',
        JSON.stringify({
          'access-token': user['access-token'],
          'client': user.client,
          'uid': user.uid,
          'expiry': user.expiry,
          'token-type': 'Bearer',
        })
      );

      console.log(sessionStorage.user);
      })
    .fail(function(resp) {
      alert('Authentication failure: ' + resp.errors.join(' '));
    });
  }
  
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

    const buttonLoginOrProfile = true
      ? <button onClick={this.handleAuthClick}
                bsStyle='default'
                data-provider='saml'>
          Login
        </button>
      : <NavLink
          to="perfil"
          onClick={this.onClickedClose}>
          Meu perfil
        </NavLink>;

    return (
      <nav className={classes.join(' ')} id="mobileMenu">
        {links}
        <hr/>
        {buttonLoginOrProfile}
        <button onClick={this.handleLogoutClick}>
          Sair
        </button>
        <button className={styles.close} onClick={this.onClickedClose}>
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
