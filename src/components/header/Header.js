import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from 'views/profile/Avatar';
import BodyActions from 'actions/BodyActions';
import Fade from '@material-ui/core/Fade';
import CurriculoPopover from 'components/popovers/CurriculoPopover';
import LoginPopover from 'components/popovers/LoginPopover';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ProfileActions from 'actions/ProfileActions';
import ProfilePopover from 'components/popovers/ProfilePopover';
import isLogged from 'data/isLogged';
import chevronDown from 'images/chevrons/down.svg';
import styles from './Header.scss';

class Header extends Component {
  state = { anchor: null };

  onClickedToggler = () => {
    this.props.showMobileMenu();
  };

  onClosePopover = () => {
    this.setState({ anchor: null });
  };

  onMouseEnter = e => {
    this.setState({ anchor: e.currentTarget });
  };

  onMouseLeave = e => {
    this.setState({ anchor: null });
  };

  componentDidMount() {
    if (isLogged()) {
      this.props.loadProfile();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLogged !== this.props.isLogged) {
      this.setState({ anchor: null });
    }
  }

  render() {
    const data = [
      {
        to: '/sequencias',
        label: 'Sequências de Atividades',
      },
      {
        to: '/tecnologias-para-aprendizagem',
        label: 'Tecnologias para Aprendizagem',
      },
    ];

    const { anchor } = this.state;
    const hasPopover = !!anchor;

    const links = data.map((item, i) => {
      return (
        <NavLink key={i} to={item.to} onClick={this.onClickedClose}>
          {item.label}
        </NavLink>
      );
    });

    const ConsultationLink = isLogged() ? (
      <NavLink to='/consultas-publicas' onClick={this.onClickedClose}>
        Consultas Públicas
      </NavLink>
    ) : null;

    const answerBooksLink = isLogged() ? (
      <NavLink to='/cadernos-respostas' onClick={this.onClickedClose}>
        Cadernos dos Professores
      </NavLink>
    ) : null;

    const avatar = isLogged() ? (
      <button className={styles.avatar} id='avatar' onMouseEnter={this.onMouseEnter}>
        <Avatar size={35} />
        <img src={chevronDown} alt="Perfil" />
      </button>
    ) : null;

    const btnLogin = <button id='login' onMouseEnter={this.onMouseEnter}>Login</button>;

    const btnCurriculos = <button id='curriculo' onMouseEnter={this.onMouseEnter}>Entenda o currículo</button>;

    let popoverContents = null;
    if (hasPopover) {
      if (anchor.id === "login" || anchor.id ==="avatar") {
        popoverContents = isLogged() ? (
          <ProfilePopover onMouseLeave={this.onMouseLeave} />
        ) : (
          <LoginPopover onMouseLeave={this.onMouseLeave} />
        );
      } else {
        popoverContents = <CurriculoPopover onMouseLeave={this.onMouseLeave} />
      }
    }

    const popover = (
      <Popper
        open={hasPopover}
        anchorEl={anchor}
        onClose={this.onClosePopover}
        placement="bottom-end"
        disablePortal
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={300}>
            <Paper>{popoverContents}</Paper>
          </Fade>
        )}
      </Popper>
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
            {answerBooksLink}
            {ConsultationLink}
            {btnCurriculos}
            {avatar || btnLogin}
          </nav>
          <div className={styles.mobile}>
            {avatar}
            <button
              className={styles.toggler}
              onClick={this.onClickedToggler}
            />
          </div>
          {popover}
        </header>
      </Headroom>
    );
  }
}

Header.propTypes = {
  isLogged: PropTypes.bool,
  showMobileMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    isLogged: state.ProfileReducer.isLogged,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProfile: () => {
      dispatch(ProfileActions.load());
    },
    showMobileMenu: () => {
      dispatch(BodyActions.showMobileMenu());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
