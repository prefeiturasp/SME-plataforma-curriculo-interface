import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from 'j-toker';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import getWindowWidth from '../util/getWindowWidth';
import iconCloseBig from '../../images/iconCloseBig.svg';
import iconMenu from '../../images/iconMenu.svg';
import iconMenuWhite from '../../images/iconMenuWhite.svg';
import logoColor from '../../images/logo.svg';
import logoWhite from '../../images/logoWhite.svg';
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

    if (getWindowWidth() < 768) {
      this.props.showPopup();
    }
  }

  onClickedClose() {
    this.setState({ isMenuExpanded: false });
    this.props.hidePopup();
  }

  handleAuthClick(){

    Auth.configure({
      apiUrl:                '/api/v1',
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
        uid:            "{{ uid }}"
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
        saml:    '/auth/saml'
      }
    });

    var provider = 'saml';
    Auth.oAuthSignIn({
      provider: provider,
      config: this.props.config,
      params: {
        namespace_name: 'api_v1',
        resource_class: 'User'
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
          'token-type': 'Bearer'
        })
      );

      console.log("FEITO")
      console.log(sessionStorage.user)

      this.setState({
        errors: null,
        isModalOpen: true,
        favorite_color: ''
      });
      }.bind(this))
    .fail(function(resp) {
      alert('Authentication failure: ' + resp.errors.join(' '));
      this.setState({
        errors: resp.data.errors,
        isModalOpen: true
      })
    }.bind(this));
  }
  
  render() {
    const classes = this.state.isMenuExpanded ? [styles.menu, styles.isMenuExpanded] : [styles.menu];
    const icon = this.props.isHome ? iconMenuWhite : iconMenu;
    const logo = this.props.isHome ? logoWhite : logoColor;

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
        <div className="container">
          <div className={styles.logo}>
            <img src={logo} alt="Currículo Digital da Cidade de São Paulo" />
            <h1>Currículo Digital da Cidade de São Paulo</h1>
          </div>
          <nav className={classes.join(' ')}>
            {links}
              <button onClick={this.handleAuthClick.bind(this)}
                    bsStyle='default'
                    data-provider='saml'>
              Login
            </button>
            <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
              <img src={iconCloseBig} alt="Fechar" />
            </button>
          </nav>
          <button className={styles.toggler} onClick={this.onClickedMenu.bind(this)}>
            <img src={icon} alt="Menu" />
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isHome: PropTypes.bool.isRequired,
  hidePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
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
