import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import AlertActions from 'actions/AlertActions';
import iconClose from 'images/icons/close.svg';
import iconWarningBig from 'images/icons/warningBig.svg';
import styles from './Alert.scss';

Modal.setAppElement('#root');

class Alert extends Component {
  render() {
    const { isOpened, close, message } = this.props;

    return (
      <Modal
        className={styles.alert}
        overlayClassName={styles.overlay}
        isOpen={isOpened}
        onRequestClose={close}
        shouldCloseOnOverlayClick={true}
      >
        <button className={styles.close} onClick={close}>
          <img src={iconClose} alt="Fechar" />
        </button>
        <p>
          <img src={iconWarningBig} alt="Atenção" />
          <span>{message}</span>
        </p>
        <button className={styles.ok} onClick={close}>
          OK
        </button>
      </Modal>
    );
  }
}

Alert.propTypes = {
  close: PropTypes.func.isRequired,
  isOpened: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    isOpened: state.AlertReducer.isOpened,
    message: state.AlertReducer.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    close: () => {
      dispatch(AlertActions.close());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
