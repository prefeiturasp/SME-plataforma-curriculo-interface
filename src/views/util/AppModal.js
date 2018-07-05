import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import FiltersActions from '../../actions/FiltersActions';
import LearningObjectivesActions from '../../actions/LearningObjectivesActions';
import iconClose from '../../images/iconClose.svg';
import iconWarningBig from '../../images/iconWarningBig.svg';

Modal.setAppElement('#root');

class AppModal extends Component {
  onClickedClose() {
    this.props.hideWarning();
  }

  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        contentLabel="Example Modal"
        isOpen={this.props.isShowingWarning}
        onRequestClose={this.props.hideWarning}
        shouldCloseOnOverlayClick={true}>
        <button onClick={this.props.hideWarning}>
          <img src={iconClose} alt="Fechar" />
        </button>
        <p>
          <img src={iconWarningBig} alt="Atenção" />
          <span>Selecione pelo menos um ano ou componente curricular para encontrar sequencias de atividades.</span>
        </p>
      </Modal>
    );
  }
}

AppModal.propTypes = {
  isShowingWarning: PropTypes.bool,
  hideWarning: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    isShowingWarning: state.FiltersReducer.isShowingWarning || state.LearningObjectivesReducer.isShowingWarning,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideWarning: () => {
      dispatch(FiltersActions.hideWarning());
      dispatch(LearningObjectivesActions.hideWarning());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModal);
