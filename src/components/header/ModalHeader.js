import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import arrowLeft from 'images/arrows/left.svg';
import iconClose from 'images/icons/closeBig.svg';
import styles from './ModalHeader.scss';

class ModalHeader extends React.PureComponent {
  onClickedBack = () => {
    if (this.props.onBack) {
      this.props.onBack();
    } else {
      this.props.history.goBack();
    }
  };

  render() {
    const btnBack = (
      <button className={styles.btnBack} onClick={this.onClickedBack}>
        <img src={arrowLeft} alt="Voltar" />
      </button>
    );

    const btnClose = (
      <button className={styles.btnClose} onClick={this.onClickedBack}>
        <img src={iconClose} alt="Fechar" />
      </button>
    );

    return (
      <div className={styles.wrapper}>
        <h1>{this.props.title}</h1>
        {btnBack}
        {btnClose}
      </div>
    );
  }
}

ModalHeader.propTypes = {
  onBack: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default withRouter(ModalHeader);
