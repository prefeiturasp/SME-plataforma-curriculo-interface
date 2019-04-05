import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ChallengeActions from 'actions/ChallengeActions';
import ChallengePreview from './ChallengePreview';
import Classroom from 'views/profile/collection/edit/Classroom';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import iconPlus from 'images/icons/plus.svg';
import styles from './SendResult.scss';

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
    description: '',
    hasChecked: false,
    videos: [],
  };

  onChangedCheckbox = e => {
    this.setState({
      ...this.state,
      hasChecked: e.target.checked,
    });
  };

  onChangedVideo = index => {
    return function(e) {
      const newVideos = this.state.videos.concat();
      newVideos[index] = e.target.value;

      this.setState({
        ...this.state,
        videos: newVideos,
      });
    }
  };

  onClickedAddVideo = () => {
    this.setState({
      ...this.state,
      videos: this.state.videos.concat({}),
    });
  };

  onClickedSend = () => {

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
    const { description, hasChecked, videos } = this.state;

    const videoFields = videos.map((item, i) => {
      return (
        <div>
          <TextField
            key={i}
            value={item}
            onChange={this.onChangedVideo(i)}
          />
          <p>Cole o link do vídeo hospedado no Youtube ou Vimeo</p>
        </div>
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
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Enviar resultado" />
          <ChallengePreview challenge={challenge} />
          <hr />
          <div className="container">
            <div className="row">
              <h2>Nos conte sobre as abordagens e desdobramentos na construção do projeto.</h2>
              <p>Além de texto, você pode incluir links para vídeos, posts em outras plataformas ou redes sociais.</p>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <TextField
                fullWidth={true}
                label="Descrição"
                onChange={this.onChangedDescription}
                value={description}
              />
              
              {videoFields}
              <button onClick={this.onClickedAddVideo}>
                <img src={iconPlus} alt="Adicionar mais um vídeo" />
                Adicionar mais um vídeo
              </button>
              
              <label>Outros anexos (opcional)</label>
              <p>Formatos: .png, .jpg, .pdf, .ppt até 10 MB</p>

              <label>Selecionar turmas (opcional)</label>
              {classroomItems}

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
          <ModalFooter label="Enviar" onClick={this.onClickedSend} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

SendResult.propTypes = {
  challenge: PropTypes.object,
  classrooms: PropTypes.array.isRequired,
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendResult);
