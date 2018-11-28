import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SimpleFooter from '../common/SimpleFooter';
import SimpleHeader from '../common/SimpleHeader';
import imgHome from '../../images/imgHome.jpg';
import styles from './Profile.scss';

class Profile extends Component {
  state = { nickname: 'Marília' };

  onChangedNickname = (e) => {
    this.setState({ nickname: e.target.value });
  }

  onClickedAddPhoto = () => {

  }

  onClickedChangePhoto = () => {

  }

  onClickedDeletePhoto = () => {

  }

  onClickedSave = () => {
    
  }

  render() {
    const nickname = 'Marília';
    const name = 'Marília Silva';

    const hasImage = false;
    const image = hasImage
      ? <div className={styles.center}>
          <img
            className={styles.photo}
            src={imgHome}
            alt={name}
          />
          <div className={styles.actions}>
            <button onClick={this.onClickedChangePhoto}>
              Alterar
            </button>
            <span>&middot;</span>
            <button onClick={this.onClickedDeletePhoto}>
              Deletar
            </button>
          </div>
        </div>
      : <div className={styles.center}>
          <div
            className={styles.initial}
          >
            {nickname.charAt(0).toUpperCase()}
          </div>
          <div className={styles.actions}>
            <button onClick={this.onClickedAddPhoto}>
              Adicionar foto
            </button>
          </div>
        </div>;

    const isInvalidNickname = this.state.nickname.length <= 0;
    const nicknameMessage = isInvalidNickname ? 'Campo obrigatório' : '';

    return (
      <section className={styles.wrapper}>
        <SimpleHeader
          title="Editar Perfil"
        />
        {image}
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
        <p className={styles.obs}>Caso deseje alterar sua senha, acesse sua conta na <a href="https://sme.prefeitura.sp.gov.br/" target="_blank">Secretaria Municipal de Educação</a>.</p>
        <SimpleFooter
          label="Salvar"
          onClick={this.onClickedSave}
        />
      </section>
    );
  }
}

export default Profile;
