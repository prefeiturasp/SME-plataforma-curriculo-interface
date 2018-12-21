import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import AlertActions from 'actions/AlertActions';
import DesktopModal from 'components/layout/DesktopModal';
import ProfileActions from 'actions/ProfileActions';
import ModalPage from 'components/layout/ModalPage';
import SimpleFooter from 'components/footer/SimpleFooter';
import SimpleHeader from 'components/header/SimpleHeader';
import styles from './EditProfile.scss';
import { API_URL } from 'data/constants';

class EditProfile extends Component {
  state = {
    isUploading: false,
    name: '',
    nickname: '',
    photo: null,
  };

  onChangedNickname = e => {
    this.setState({
      ...this.state,
      nickname: e.target.value,
    });
  };

  onClickedAddPhoto = e => {
    const files = Array.from(e.target.files);
    const file = files[0];
    this.props.savePhoto(this.props.id, file);

    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        ...this.state,
        photo: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  onClickedChangePhoto = e => {
    this.onClickedAddPhoto(e);
  };

  onClickedDeletePhoto = () => {
    this.props.deletePhoto();
  };

  onClickedSave = () => {
    this.props.saveNickname(this.props.id, this.state.nickname);
  };

  componentDidMount() {
    this.props.load();
  }

  componentDidUpdate(prevProps) {
    if (this.props.nickname !== prevProps.nickname) {
      this.setState({
        ...this.state,
        name: this.props.name,
        nickname: this.props.nickname,
        photo: API_URL + this.props.photo,
      });
    }

    if (this.props.isUploading !== prevProps.isUploading) {
      this.setState({
        ...this.state,
        isUploading: this.props.isUploading,
      });
    }
  }

  render() {
    const hasImage = this.state.photo !== null;

    const progress = this.state.isUploading ? (
      <div className={styles.progress}>
        <CircularProgress
          size={108}
          thickness={2}
          value={this.state.progress}
        />
      </div>
    ) : null;

    let actions = null;
    if (this.state.isUploading) {
      actions = <div className={styles.actions}>Atualizando...</div>;
    } else if (hasImage) {
      actions = (
        <div className={styles.actions}>
          <input
            className={styles.file}
            id="photo"
            type="file"
            onChange={this.onClickedAddPhoto}
          />
          <label htmlFor="photo">Alterar</label>
          <span>&middot;</span>
          <button onClick={this.onClickedDeletePhoto}>Deletar</button>
        </div>
      );
    } else {
      actions = (
        <div className={styles.actions}>
          <input
            className={styles.file}
            id="photo"
            type="file"
            onChange={this.onClickedAddPhoto}
          />
          <label htmlFor="photo">Adicionar foto</label>
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
            src={this.state.photo}
            alt={this.state.name}
          />
        </div>
      );
    } else {
      const letter = this.state.nickname
        ? this.state.nickname.charAt(0).toUpperCase()
        : '';

      imageOrLetter = (
        <div className={styles.imageWrapper}>
          {progress}
          <div className={styles.letter}>{letter}</div>
        </div>
      );
    }

    const isInvalid = this.state.nickname.length <= 0;
    const message = isInvalid ? 'Campo obrigatório' : '';

    return (
      <DesktopModal>
        <ModalPage>
          <SimpleHeader back={true} title="Editar Perfil" />
          <div className={styles.center}>
            {imageOrLetter}
            {actions}
          </div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <TextField
                error={isInvalid}
                fullWidth={true}
                helperText={message}
                label="Apelido"
                onChange={this.onChangedNickname}
                value={this.state.nickname}
              />
            </div>
            <div className={styles.field}>
              <TextField
                disabled={true}
                fullWidth={true}
                label="Nome"
                value={this.state.name}
              />
            </div>
          </div>
          <p className={styles.obs}>
            Caso deseje alterar sua senha, acesse sua conta na{' '}
            <a
              href="https://sme.prefeitura.sp.gov.br/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Secretaria Municipal de Educação
            </a>
            .
          </p>
          <SimpleFooter label="Salvar" onClick={this.onClickedSave} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

EditProfile.propTypes = {
  id: PropTypes.number,
  isUploading: PropTypes.bool,
  name: PropTypes.string,
  nickname: PropTypes.string,
  photo: PropTypes.string,
  deletePhoto: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  openAlert: PropTypes.func.isRequired,
  saveNickname: PropTypes.func.isRequired,
  savePhoto: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    id: state.ProfileReducer.id,
    isUploading: state.ProfileReducer.isUploading,
    name: state.ProfileReducer.name,
    nickname: state.ProfileReducer.nickname,
    photo: state.ProfileReducer.photo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePhoto: () => {
      dispatch(ProfileActions.deletePhoto());
    },
    load: () => {
      dispatch(ProfileActions.load());
    },
    openAlert: message => {
      dispatch(AlertActions.open(message));
    },
    saveNickname: (id, nickname) => {
      dispatch(ProfileActions.saveNickname(id, nickname));
    },
    savePhoto: (id, photo) => {
      dispatch(ProfileActions.savePhoto(id, photo));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
