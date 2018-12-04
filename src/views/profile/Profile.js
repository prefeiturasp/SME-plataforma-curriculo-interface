import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import SimpleFooter from '../common/SimpleFooter';
import SimpleHeader from '../common/SimpleHeader';
import imgHome from '../../images/imgHome.jpg';
import styles from './Profile.scss';

class Profile extends Component {
  state = {
    isUploading: false,
    nickname: 'Marília',
    progress: 0,
  };

  startUpload = () => {
    setTimeout(this.finishUpload, 2000);

    this.setState({
      ...this.state,
      isUploading: true,
      progress: 0,
    });
  }

  finishUpload = () => {
    this.setState({
      ...this.state,
      isUploading: false,
    })
  }

  onChangedNickname = (e) => {
    this.setState({
      ...this.state,
      nickname: e.target.value,
    });
  }

  onClickedAddPhoto = () => {
    this.startUpload();
  }

  onClickedChangePhoto = () => {
    this.startUpload();
  }

  onClickedDeletePhoto = () => {

  }

  onClickedSave = () => {
    
  }

  render() {
    const nickname = 'Marília';
    const name = 'Marília Silva';
    const hasImage = false;

    const progress = this.state.isUploading
      ? <div className={styles.progress}>
          <CircularProgress
            size={108}
            thickness={2}
            value={this.state.progress}
          />
        </div>
      : null;

    let actions = null;
    if (this.state.isUploading) {
      actions = (
        <div className={styles.actions}>
          Atualizando...
        </div>
      );
    } else if (hasImage) {
      actions = (
        <div className={styles.actions}>
          <button onClick={this.onClickedChangePhoto}>
            Alterar
          </button>
          <span>&middot;</span>
          <button onClick={this.onClickedDeletePhoto}>
            Deletar
          </button>
        </div>
      );
    } else {
      actions = (
        <div className={styles.actions}>
          <button onClick={this.onClickedAddPhoto}>
            Adicionar foto
          </button>
        </div>
      );
    }

    let imageOrLetter = null;
    if (hasImage) {
      imageOrLetter = (
        <div className={styles.imageWrapper}>
          {progress}
          <img
            className={styles.image}
            src={imgHome}
            alt={name}
          />
        </div>
      );
    } else {
      const letter = nickname.charAt(0).toUpperCase();

      imageOrLetter = (
        <div className={styles.imageWrapper}>
          {progress}
          <div className={styles.letter}>
            {letter}
          </div>
        </div>
      );
    }

    const isInvalidNickname = this.state.nickname.length <= 0;
    const nicknameMessage = isInvalidNickname ? 'Campo obrigatório' : '';

    return (
      <section className={styles.wrapper}>
        <SimpleHeader
          title="Editar Perfil"
        />
        <div className={styles.center}>
          {imageOrLetter}
          {actions}
        </div>
        <div className={styles.fields}>
          <div className={styles.field}>
            <TextField
              id="nickname"
              defaultValue={nickname}
              error={isInvalidNickname}
              fullWidth={true}
              helperText={nicknameMessage}
              label="Apelido"
              onChange={this.onChangedNickname}
            />
          </div>
          <div className={styles.field}>
            <TextField
              id="name"
              disabled={true}
              fullWidth={true}
              label="Nome"
              value={name}
            />
          </div>
        </div>
        <p className={styles.obs}>Caso deseje alterar sua senha, acesse sua conta na <a href="https://sme.prefeitura.sp.gov.br/" target="_blank" rel="noreferrer noopener">Secretaria Municipal de Educação</a>.</p>
        <SimpleFooter
          label="Salvar"
          onClick={this.onClickedSave}
        />
      </section>
    );
  }
}

export default Profile;
