import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/loading/Loading';
import styles from './ModalFooterWithCancel.scss';
import { history } from 'index';

class ModalFooterWithCancel extends React.PureComponent {
  onClickedCancel = () => {
    history.goBack();
  };

  render() {
    const { isLoading, labelAction, labelCancel, onClickAction } = this.props;
    const content = isLoading
      ? <Loading size={24} />
      : labelAction;

    return (
      <footer className={styles.wrapper}>
        <button className={styles.btnCancel} onClick={this.onClickedCancel}>
          {labelCancel}
        </button>
        <button className={styles.btnAction} onClick={onClickAction}>
          {content}
        </button>
      </footer>
    );
  }
}

ModalFooterWithCancel.propTypes = {
  isLoading: PropTypes.bool,
  labelAction: PropTypes.string.isRequired,
  labelCancel: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
};

export default ModalFooterWithCancel;
