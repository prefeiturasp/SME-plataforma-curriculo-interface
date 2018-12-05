import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import arrowLeft from '../../images/arrowLeft.svg';
import iconCloseBig from '../../images/iconCloseBig.svg';
import styles from './SimpleHeader.scss';

class SimpleHeader extends Component {
  render() {
    const btnBack = this.props.back
      ? <NavLink className={styles.back} to={this.props.back.url}>
          <img src={arrowLeft} alt="Voltar" />
        </NavLink>
      : null;

    const btnClose = this.props.close
      ? <button className={styles.close} onClick={this.props.close.onClick}>
          <img src={iconCloseBig} alt="Fechar" />
        </button>
      : null;

    return (
      <div className={styles.wrapper}>
        <h3>{this.props.title}</h3>
        {btnBack}
        {btnClose}
      </div>
    );
  }
}

SimpleHeader.propTypes = {
  back: PropTypes.object,
  close: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default SimpleHeader;
