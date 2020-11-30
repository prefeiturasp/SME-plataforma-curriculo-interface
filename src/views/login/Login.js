import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { connect } from 'react-redux';
import { history } from 'index';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalPage from 'components/layout/ModalPage';
import LoginActions from 'actions/LoginActions';
import iconClose from 'images/icons/closeBig.svg';
import logo from 'images/logo.svg';
import styles from './Login.scss';

class Login extends Component {
  ref = React.createRef();
  state = {
    hasEditedUsername: false,
    hasEditedPassword: false,
    isLoading: false,
    isShowingPassword: false,
    username: '',
    password: '',
  };

  onChangedUsername = e => {
    this.setState({
      ...this.state,
      hasEditedUsername: true,
      username: e.target.value,
    });
  };

  onChangedPassword = e => {
    this.setState({
      ...this.state,
      hasEditedPassword: true,
      password: e.target.value,
    });
  };

  onClickedClose = () => {
    history.goBack();
  };

  onClickedShowPassword = e => {
    this.setState({
      ...this.state,
      isShowingPassword: !this.state.isShowingPassword,
    });
  };

  onClickedEnter = () => {
    if (this.state.username.length && this.state.password.length) {
      this.props.login(this.state.username, this.state.password);
      this.setState({
        ...this.state,
        isLoading: true,
      })
    } else {
      this.setState({
        ...this.state,
        hasEditedUsername: true,
        hasEditedPassword: true,
      });
    }
  };

  onKeyPressUsername = e => {
    if (e.key === 'Enter') {
      this.ref.current.focus();
    }
  };

  onKeyPressPassword = e => {
    if (e.key === 'Enter') {
      this.onClickedEnter();
    }
  };

  render() {
    const { hasEditedUsername, hasEditedPassword, isLoading, isShowingPassword, username, password } = this.state;
    const isInvalidUsername = hasEditedUsername && username.length <= 0;
    const isInvalidPassword = hasEditedPassword && password.length <= 0;
    const messageUsername = isInvalidUsername ? 'Campo obrigatório' : '';
    const messagePassword = isInvalidPassword ? <FormHelperText error={true}>Campo obrigatório</FormHelperText> : '';

    return (
      <DesktopModal isSmall>
        <ModalPage>
          <div className={styles.wrapper}>
            <button className={styles.btnClose} onClick={this.onClickedClose}>
              <img src={iconClose} alt="Fechar" />
            </button>
            <header className={styles.header}>
              <img src={logo} alt="Currículo Digital da Cidade de São Paulo" />
              <h1>Faça login no Currículo</h1>
              <p>
                Digite os seus dados de acesso da Secretaria de Educação da
                Prefeitura de São Paulo
              </p>
            </header>
            <TextField
              error={isInvalidUsername}
              fullWidth={true}
              helperText={messageUsername}
              label="Login (RF)"
              onChange={this.onChangedUsername}
              onKeyPress={this.onKeyPressUsername}
              value={username}
            />
            <div className={styles.spacer} />
            <FormControl fullWidth={true}>
              <InputLabel
                error={isInvalidPassword}
                htmlFor="password"
              >
                Senha (a mesma do SGP)
              </InputLabel>
              <Input
                error={isInvalidPassword}
                id="password"
                inputRef={this.ref}
                type={isShowingPassword ? 'text' : 'password'}
                value={password}
                onChange={this.onChangedPassword}
                onKeyPress={this.onKeyPressPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Exibir senha"
                      onClick={this.onClickedShowPassword}
                    >
                      {isShowingPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {messagePassword}
            </FormControl>
            <div className={styles.spacer} />
            <a className={styles.btnForgot} href="https://novosgp.sme.prefeitura.sp.gov.br/recuperar-senha">Esqueceu a senha?</a>
          </div>
          <ModalFooter label="Entrar" onClick={this.onClickedEnter} isLoading={isLoading} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(LoginActions.login(username, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
