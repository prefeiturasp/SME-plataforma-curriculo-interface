import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import BodyActions from '../../actions/BodyActions';
import iconClose from '../../images/iconClose.svg';
import iconWarningBig from '../../images/iconWarningBig.svg';

Modal.setAppElement('#root');

class AppModal extends Component {
  onClickedClose() {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        contentLabel="Example Modal"
        isOpen={this.props.hasModal}
        onRequestClose={this.props.hideModal}
        shouldCloseOnOverlayClick={true}>
        <button onClick={this.props.hideModal}>
          <img src={iconClose} alt="Fechar" />
        </button>
        <p>
          <img src={iconWarningBig} alt="Atenção" />
          <span>{this.props.message}</span>
        </p>
      </Modal>
    );
  }
}

AppModal.propTypes = {
  hasModal: PropTypes.bool,
  hideModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    hasModal: state.BodyReducer.hasModal,
    message: state.BodyReducer.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => {
      dispatch(BodyActions.hideModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModal);
