import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import FiltersActions from '../../actions/FiltersActions';
import iconClose from '../../images/iconClose.svg';
import iconWarningBig from '../../images/iconWarningBig.svg';

Modal.setAppElement('#root');

class AppModal extends Component {
  onClickedClose() {
    this.props.dismissSearchWarning();
  }

  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        contentLabel="Example Modal"
        isOpen={this.props.showSearchWarning}
        onRequestClose={this.props.dismissSearchWarning}
        shouldCloseOnOverlayClick={true}>
        <button onClick={this.props.dismissSearchWarning}>
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
  showSearchWarning: PropTypes.bool,
  dismissSearchWarning: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    showSearchWarning: state.FiltersReducer.showSearchWarning,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dismissSearchWarning: () => {
      dispatch(FiltersActions.dismissSearchWarning());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModal);
