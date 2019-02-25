import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { history } from 'index';
import BigSequencePreview from 'views/sequence/BigSequencePreview';
import CollectionActions from 'actions/CollectionActions';
import DesktopModal from 'components/layout/DesktopModal';
import ModalPage from 'components/layout/ModalPage';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import SequenceActions from 'actions/SequenceActions';
import SequencePreview from 'views/activity/SequencePreview';
import styles from 'views/profile/collection/edit/EditCollection.scss';
import styles1 from 'views/sequence/save/SaveSequence.scss';

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
      history.go(-2);
    } else {
      this.props.create(this.state.name);
      history.goBack();
    }
  };

  componentDidMount() {
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.sequenceId
    ) {
      this.setState({
        ...this.state,
        sequenceId: this.props.location.state.sequenceId,
      });
    }

    const slug = this.props.match.params.slug;
    if (!this.props.sequence || this.props.sequence.slug !== slug) {
      this.props.load(slug);
    }
  }

  render() {
    const { sequence } = this.props;
    const { hasEdited, name, sequenceId } = this.state;
    
    const bigSequencePreview = sequenceId ? (
      <div className={styles1.col1}>
        <BigSequencePreview sequence={sequence} />
      </div>
    ) : null;

    const sequencePreview = sequenceId ? (
      <SequencePreview sequence={sequence} />
    ) : null;

    const hr = sequenceId ? <hr /> : null;

    const isInvalid = hasEdited && name.length <= 0;
    const message = isInvalid ? 'Campo obrigatório' : '';

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Criar coleção" />
          <div className={styles1.row}>
            {bigSequencePreview}
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
                  value={name}
                />
              </header>
            </div>
          </div>
          <ModalFooter label="Criar" onClick={this.onClickedSave} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

CreateCollection.propTypes = {
  classrooms: PropTypes.array.isRequired,
  create: PropTypes.func.isRequired,
};

CreateCollection.defaultProps = {
  classrooms: [],
};

const mapStateToProps = state => {
  return {
    sequence: state.SequenceReducer.currItem,
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
    load: slug => {
      dispatch(SequenceActions.load(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCollection);
