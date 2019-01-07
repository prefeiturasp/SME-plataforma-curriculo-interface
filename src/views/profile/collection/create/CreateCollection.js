import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BigSequencePreview from 'views/sequence/BigSequencePreview';
import Classroom from 'views/profile/collection/edit/Classroom';
import CollectionActions from 'actions/CollectionActions';
import DesktopModal from 'components/layout/DesktopModal';
import ModalPage from 'components/layout/ModalPage';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import SequencePreview from 'views/activity/SequencePreview';
import styles from 'views/profile/collection/edit/EditCollection.scss';
import styles1 from 'views/sequence/BigSequencePreview.scss';

class CreateCollection extends Component {
  state = {
    hasEdited: false,
    name: '',
    sequenceId: 0,
  };

  onChangedName = e => {
    this.setState({
      hasEdited: true,
      name: e.target.value,
    });
  };

  onClickedSave = () => {
    if (this.state.sequenceId > 0) {
      this.props.createAndSaveSequence(this.state.name, this.state.sequenceId);
      this.props.history.go(-2);
    } else {
      this.props.create(this.state.name);
      this.props.history.goBack();
    }
  };

  componentDidMount() {
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.sequenceId > 0
    ) {
      this.setState({
        ...this.state,
        sequenceId: this.props.location.state.sequenceId,
      });
    }
  }

  render() {
    const classrooms = [
      {
        color: '#70b279',
        level: 'EJA',
        name: '[2018] Ciências Naturais',
        school: 'EMEF Maria da Silva',
        year: '1A',
      },
      {
        color: '#70b279',
        level: 'EF',
        name: '[2018] Ciências Naturais',
        school: 'EMEF João de Deus',
        year: '2D',
      },
      {
        color: '#70b279',
        level: 'EJA',
        name: '[2018] História',
        school: 'EMEF Maria da Silva',
        year: '1A',
      },
      {
        color: '#70b279',
        level: 'EF',
        name: '[2018] Matemática',
        school: 'EMEF João de Deus',
        year: '2D',
      },
      {
        color: '#70b279',
        level: 'EF',
        name: '[2018] Matemática',
        school: 'EMEF João de Deus',
        year: '3A',
      },
      {
        color: '#70b279',
        level: 'EJA',
        name: '[2018] Matemática',
        school: 'EMEF Maria da Silva',
        year: '3A',
      },
      {
        color: '#70b279',
        level: 'EJA',
        name: '[2017] Ciências Naturais',
        school: 'EMEF Maria da Silva',
        year: '1A',
      },
      {
        color: '#70b279',
        level: 'EF',
        name: '[2017] Ciências Naturais',
        school: 'EMEF João de Deus',
        year: '2D',
      },
    ];

    const items = classrooms.map((classroom, i) => {
      return (
        <Classroom
          key={i}
          color={classroom.color}
          level={classroom.level}
          name={classroom.name}
          school={classroom.school}
          year={classroom.year}
        />
      );
    });

    const bigSequencePreview = this.state.sequenceId ? (
      <BigSequencePreview sequence={this.props.sequence} />
    ) : null;

    const sequencePreview = this.state.sequenceId ? (
      <SequencePreview sequence={this.props.sequence} />
    ) : null;

    const hr = this.state.sequenceId ? <hr /> : null;

    const isInvalid = this.state.hasEdited && this.state.name.length <= 0;
    const message = isInvalid ? 'Campo obrigatório' : '';

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Criar coleção" />
          <div className={styles1.row}>
            <div className={styles1.col1}>
              {bigSequencePreview}
            </div>
            <div className={styles1.col2}>
              <div className={styles1.small}>
                {sequencePreview}
                {hr}
              </div>
              <header className={styles.header}>
                <TextField
                  error={isInvalid}
                  fullWidth={true}
                  helperText={message}
                  inputRef={input => (input ? input.focus() : null)}
                  label="Nome da coleção"
                  onChange={this.onChangedName}
                  value={this.state.name}
                />
              </header>
              <div className={styles.list}>
                <h3>Selecionar turmas (opcional)</h3>
                {items}
              </div>
            </div>
          </div>
          <ModalFooter label="Criar" onClick={this.onClickedSave} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

CreateCollection.propTypes = {
  create: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    sequence: state.SequencesReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    create: name => {
      dispatch(CollectionActions.create(name));
    },
    createAndSaveSequence: (name, sequenceId) => {
      dispatch(CollectionActions.createAndSaveSequence(name, sequenceId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateCollection));
