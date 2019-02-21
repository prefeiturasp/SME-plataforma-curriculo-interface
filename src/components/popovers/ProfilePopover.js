import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginActions from 'actions/LoginActions';
import styles from './ProfilePopover.scss';

class ProfilePopover extends React.PureComponent {
  onClickedLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className={styles.popover} onMouseLeave={this.props.onMouseLeave}>
        <NavLink to="/perfil" className={styles.btn}>
          Meu perfil
        </NavLink>
        <button className={styles.btn} onClick={this.onClickedLogout}>
          Sair
        </button>
      </div>
    );
  }
}

ProfilePopover.propTypes = {
  logout: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(LoginActions.logout());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProfilePopover);
