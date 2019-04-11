import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AlertActions from 'actions/AlertActions';
import Attachment from './Attachment';
import BigPreview from 'components/objects/BigPreview';
import ChallengeActions from 'actions/ChallengeActions';
import ChallengePreview from './ChallengePreview';
import Classroom from 'views/collection/edit/Classroom';
import ConfirmActions from 'actions/ConfirmActions';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import formatFileSize from 'utils/formatFileSize';
import iconClip from 'images/icons/clip.svg';
import iconPlus from 'images/icons/plus.svg';
import styles from './SendResult.scss';
import styles1 from 'views/sequence/save/SaveSequence.scss';

const MAX_CHARS = 3000;
const MAX_SIZE = 10 * 1024 * 1024;
const MAX_SIZE_FORMATTED = formatFileSize(MAX_SIZE);

const CustomCheckbox = withStyles({
  root: {
    color: '#6a6a6a',
    '&$checked': {
      color: '#008080',
    },
  },
  checked: {},
})(Checkbox);

class SendResult extends Component {
  state = {
    hasChecked: false,
    description: '',
    videos: [
      { url: '' },
    ],
    attachments: [],
  };

  onChangedCheckbox = e => {
    this.setState({
      ...this.state,
      hasChecked: e.target.checked,
    });
  };

  onChangedDescription = e => {
    if (e.target.value.length <= MAX_CHARS) {
      this.setState({
        ...this.state,
        description: e.target.value,
      });
    }
  };

  onChangedVideo = index => {
    return e => {
      const videos = this.state.videos.concat();
      videos[index] = { url: e.target.value };

      this.setState({
        ...this.state,
        videos,
      });
    }
  };

  onClickedAddVideo = () => {
    this.setState({
      ...this.state,
      videos: this.state.videos.concat({
        url: '',
      }),
    });
  };

  onClickedDeleteFile = index => {
    return e => {
      const attachments = this.state.attachments.concat();
      attachments.splice(index, 1);

      this.setState({
        ...this.state,
        attachments,
      });
    };
  };

  onClickedSelectFile = e => {
    const files = Array.from(e.target.files);
    const acceptedFiles = files.filter(file => file.size <= MAX_SIZE );

    if (acceptedFiles.length < files.length) {
      this.props.openAlert(`O tamanho do arquivo que você está tentando enviar excede o limite de ${MAX_SIZE_FORMATTED}`);
    }

    this.setState({
      ...this.state,
      attachments: this.state.attachments.concat(acceptedFiles),
    });
  };

  onClickedSend = () => {
    if (this.state.attachments.length <= 0) {
      this.props.openConfirm(
        'Deseja continuar sem anexo?',
        'Ocorreu uma falha e não foi possível salvar todos os anexos.',
        'Continuar sem anexo',
        'Tentar novamente',
        this.onClickedContinue
      );
    }
  };

  onClickedContinue = () => {

  };

  componentDidMount() {
    const slug = this.props.match.params.slug;
    if (!this.props.challenge || this.props.challenge.slug !== slug) {
      this.props.load(slug);
    }
  }

  render() {
    if (this.props.challenge == null) {
      return <span />;
    }

    const { challenge, classrooms } = this.props;
    const { attachments, description, hasChecked, videos } = this.state;

    const counter = `${description.length} / ${MAX_CHARS}`;

    const videoItems = videos.map((item, i) => {
      const number = i > 0 ? i + 1 : '';
      const label = `Vídeo ${number} (opcional)`;
      return (
        <div key={i}>
          <TextField
            value={item.url}
            fullWidth={true}
            label={label}
            placeholder="http://"
            onChange={this.onChangedVideo(i)}
          />
          <div className={styles.videoHint}>Cole o link do vídeo hospedado no Youtube ou Vimeo</div>
        </div>
      );
    });

    const attachmentItems = attachments.map((item, i) => {
      return (
        <Attachment
          key={i}
          data={item}
          onDelete={this.onClickedDeleteFile(i)}
        />
      );
    });

    const classroomItems = classrooms.map((item, i) => {
      return (
        <Classroom
          key={i}
          color="#008080"
          level={item.level}
          name={item.name}
          school={item.school}
          year={item.year}
        />
      );
    });

    return (
      <DesktopModal isFixed>
        <ModalPage>
          <ModalHeader title="Enviar resultado" />
          <div className={styles.row}>
            <div className={styles1.col1}>
              <BigPreview data={challenge} label="Desafio" />
              <div className={styles.instructions}>
                <h2>Nos conte sobre as abordagens e desdobramentos na construção do projeto.</h2>
                <p>Além de texto, você pode incluir links para vídeos, posts em outras plataformas ou redes sociais.</p>
              </div>
            </div>
            <div className={styles1.col2}>
              <div className={styles1.small}>
                <ChallengePreview challenge={challenge} />
                <div className={styles.instructions}>
                  <h2>Nos conte sobre as abordagens e desdobramentos na construção do projeto.</h2>
                  <p>Além de texto, você pode incluir links para vídeos, posts em outras plataformas ou redes sociais.</p>
                </div>
              </div>
              <div className={styles.form}>
                <TextField
                  fullWidth={true}
                  multiline={true}
                  label="Descrição"
                  placeholder="Digite aqui"
                  onChange={this.onChangedDescription}
                  value={description}
                />
                <div className={styles.counter}>{counter}</div>
                
                <div>{videoItems}</div>
                <button className={styles.btnAddVideo} onClick={this.onClickedAddVideo}>
                  <img src={iconPlus} alt="Adicionar mais um vídeo" />
                  Adicionar mais um vídeo
                </button>
                
                <label className={styles.label}>Outros anexos (opcional)</label>
                <div className={styles.attachments}>{attachmentItems}</div>
                <label className={styles.btnAddFile}>
                  Selecionar arquivo
                  <img src={iconClip} alt="Selecionar arquivo" />
                  <input type="file" multiple onChange={this.onClickedSelectFile} />
                </label>
                <p className={styles.attachmentHint}>Formatos: .png, .jpg, .pdf, .ppt até 10 MB</p>

                <label className={styles.label}>Selecionar turmas (opcional)</label>
                <div className={styles.classrooms}>{classroomItems}</div>

                <FormControlLabel
                  control={
                    <CustomCheckbox
                      checked={hasChecked}
                      onChange={this.onChangedCheckbox}
                    />
                  }
                  label="Declaro ter autorização de uso de imagem de todo conteúdo cadastrado neste desafio."
                />
              </div>
            </div>
          </div>
          <ModalFooter label="Enviar" onClick={this.onClickedSend} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

SendResult.propTypes = {
  challenge: PropTypes.object,
  classrooms: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
  openAlert: PropTypes.func.isRequired,
  openConfirm: PropTypes.func.isRequired,
};

SendResult.defaultProps = {
  classrooms: [
    {
      level: 'EJA',
      name: '[2018] Tecnologias para aprendizagem',
      school: 'EMEF Maria da Silva',
      year: '1A',
    },
    {
      level: 'EF',
      name: '[2018] Tecnologias para aprendizagem',
      school: 'EMEF Maria da Silva',
      year: '2D',
    },
  ],
};

const mapStateToProps = state => {
  return {
    challenge: state.ChallengeReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(ChallengeActions.loadResults(slug));
    },
    openAlert: message => {
      dispatch(AlertActions.open(message));
    },
    openConfirm: (title, message, labelYes, labelNo, onConfirm) => {
      dispatch(
        ConfirmActions.open(title, message, labelYes, labelNo, onConfirm)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendResult);
