import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import BodyActions from 'actions/BodyActions';
import iconClose from 'images/icon/close.svg';
import iconWarningBig from 'images/icon/warningBig.svg';
import styles from './Alert.scss';

Modal.setAppElement('#root');

class Alert extends Component {
  render() {
    const { hasAlert, hideAlert, message } = this.props;
    
    return (
      <Modal
        className={styles.alert}
        overlayClassName={styles.overlay}
        contentLabel="Example Modal"
        isOpen={hasAlert}
        onRequestClose={hideAlert}
        shouldCloseOnOverlayClick={true}
      >
        <button
          className={styles.close}
          onClick={this.props.hideAlert}
        >
          <img
            src={iconClose}
            alt="Fechar"
          />
        </button>
        <p>
          <img
            src={iconWarningBig}
            alt="Atenção"
          />
          <span>
            {message}
          </span>
        </p>
        <button
          className={styles.ok}
          onClick={hideAlert}
        >
          OK
        </button>
      </Modal>
    );
  }
}

Alert.propTypes = {
  hasAlert: PropTypes.bool,
  hideAlert: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
