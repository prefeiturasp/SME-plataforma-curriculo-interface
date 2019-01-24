import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { connect } from 'react-redux';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalPage from 'components/layout/ModalPage';
import LoginActions from 'actions/LoginActions';
import logo from 'images/logo.svg';
import styles from './Login.scss';

class Login extends Component {
  state = {
    hasEdited: false,
    isShowingPassword: false,
    username: '',
    password: '',
  };

  onChangedUsername = e => {
    this.setState({
      ...this.state,
      hasEdited: true,
      username: e.target.value,
    })
  };

  onChangedPassword = e => {
    this.setState({
      ...this.state,
      password: e.target.value,
    })
  };

  onClickedShowPassword = e => {
    this.setState({
      ...this.state,
      isShowingPassword: !this.state.isShowingPassword,
    });
  };

  onClickedEnter = () => {
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    const isInvalid = this.state.hasEdited && this.state.username.length <= 0;
    const message = isInvalid ? 'Campo obrigatório' : '';

    return (
      <DesktopModal isSmall>
        <ModalPage>
          <div className={styles.wrapper}>
            <header className={styles.header}>
              <img src={logo} alt="Currículo Digital da Cidade de São Paulo" />
              <h1>Faça login no Currículo</h1>
              <p>Digite os seus dados de acesso da Secretaria de Educação da Prefeitura de São Paulo</p>
            </header>
            <TextField
              error={isInvalid}
              fullWidth={true}
              helperText={message}
              inputRef={input => (input ? input.focus() : null)}
              label="Nome do usuário"
              onChange={this.onChangedUsername}
              value={this.state.username}
            />
            <div className={styles.spacer} />
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input
                id="password"
                type={this.state.isShowingPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.onChangedPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Exibir senha"
                      onClick={this.onClickedShowPassword}
                    >
                      {this.state.isShowingPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className={styles.spacer} />
            <button className={styles.btnForgot}>Esqueceu a senha?</button>
          </div>
          <ModalFooter label="Entrar" onClick={this.onClickedEnter} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    
  };
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
