import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import arrowLeft from 'images/arrow/left.svg';
import iconCloseBig from 'images/icon/closeBig.svg';
import styles from './SimpleHeader.scss';

class SimpleHeader extends React.PureComponent {
  onClickedBack = () => {
    this.props.history.goBack();
  }

  render() {
    let btnBack = null;

    if (this.props.back) {
      btnBack = this.props.back.url
        ? <NavLink className={styles.back} to={this.props.back.url}>
            <img src={arrowLeft} alt="Voltar" />
          </NavLink>
        : <button className={styles.back} onClick={this.onClickedBack}>
            <img src={arrowLeft} alt="Voltar" />
          </button>;
    }
    
    const btnClose = this.props.close
      ? <button className={styles.close} onClick={this.props.close.onClick}>
          <img src={iconCloseBig} alt="Fechar" />
        </button>
      : null;

    return (
      <div className={styles.wrapper}>
        <h1>{this.props.title}</h1>
        {btnBack}
        {btnClose}
      </div>
    );
  }
}

SimpleHeader.propTypes = {
  back: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  close: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default withRouter(SimpleHeader);
