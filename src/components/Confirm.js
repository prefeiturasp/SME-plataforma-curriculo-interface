import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ConfirmActions from 'actions/ConfirmActions';
import iconClose from 'images/icon/close.svg';
import styles from './Confirm.scss';

Modal.setAppElement('#root');

class Confirm extends Component {
  onClickedYes = () => {
    this.props.onConfirm();
    this.props.close();
  }

  render() {
    const { isOpened, close, labelYes, labelNo, message, title } = this.props;
    
    return (
      <Modal
        className={styles.confirm}
        overlayClassName={styles.overlay}
        isOpen={isOpened}
        onRequestClose={close}
        shouldCloseOnOverlayClick={true}
      >
        <button
          className={styles.close}
          onClick={close}
        >
          <img
            src={iconClose}
            alt="Fechar"
          />
        </button>
        <p>
          <strong>{title}</strong>
        </p>
        <p>
          {message}
        </p>
        <button
          className={styles.btnYes}
          onClick={this.onClickedYes}
        >
          {labelYes}
        </button>
        <button
          className={styles.btnNo}
          onClick={close}
        >
          {labelNo}
        </button>
      </Modal>
    );
  }
}

Confirm.propTypes = {
  close: PropTypes.func.isRequired,
  isOpened: PropTypes.bool,
  labelNo: PropTypes.string.isRequired,
  labelYes: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    isOpened: state.ConfirmReducer.isOpened,
    labelNo: state.ConfirmReducer.labelNo,
    labelYes: state.ConfirmReducer.labelYes,
    message: state.ConfirmReducer.message,
    onConfirm: state.ConfirmReducer.onConfirm,
    title: state.ConfirmReducer.title,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    close: () => {
      dispatch(ConfirmActions.close());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
