import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthActions from 'actions/AuthActions';
import styles from 'components/MobileMenu.scss';

class LoginPopover extends React.PureComponent {
  onClickedLogin = () => {
    this.props.login();
  };

  render() {
    return (
      <div className={styles.popover} onMouseLeave={this.props.onMouseLeave}>
        <div className={styles.login}>
          <h3>
            Salve sequências de atividades.
            <br />E acesse em qualquer lugar.
          </h3>
          <button className={styles.btnLogin} onClick={this.onClickedLogin}>
            Login
          </button>
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
      </div>
    );
  }
}

LoginPopover.propTypes = {
  login: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(AuthActions.login());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPopover);
