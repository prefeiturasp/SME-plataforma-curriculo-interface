import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import BodyActions from '../../actions/BodyActions';
import iconClose from '../../images/iconClose.svg';
import iconWarningBig from '../../images/iconWarningBig.svg';

Modal.setAppElement('#root');

class AppAlert extends Component {
  onClickedClose() {
    this.props.hideAlert();
  }

  render() {
    return (
      <Modal
        className="alert"
        overlayClassName="overlay"
        contentLabel="Example Modal"
        isOpen={this.props.hasAlert}
        onRequestClose={this.props.hideAlert}
        shouldCloseOnOverlayClick={true}>
        <button onClick={this.props.hideAlert}>
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

AppAlert.propTypes = {
  hasAlert: PropTypes.bool,
  hideAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    hasAlert: state.BodyReducer.hasAlert,
    message: state.BodyReducer.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideAlert: () => {
      dispatch(BodyActions.hideAlert());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppAlert);
