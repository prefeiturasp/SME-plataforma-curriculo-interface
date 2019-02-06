import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import createModalLink from 'utils/createModalLink';
import styles from 'components/MobileMenu.scss';

class LoginPopover extends React.PureComponent {
  render() {
    const link = createModalLink('/login');

    return (
      <div className={styles.popover} onMouseLeave={this.props.onMouseLeave}>
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
      </div>
    );
  }
}

LoginPopover.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
};

export default LoginPopover;
