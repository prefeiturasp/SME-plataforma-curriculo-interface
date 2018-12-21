import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconSave from 'images/icons/save.svg';
import styles from './Title.scss';

class Title extends Component {
  render() {
    const { hasButton, text, title } = this.props;

    const button = hasButton ? (
      <button className={styles.btnSave}>
        <img src={iconSave} alt="Salvar" />
        Salvar
      </button>
    ) : null;

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>{text}</p>
          <h1>{title}</h1>
        </div>
        {button}
      </div>
    );
  }
}

Title.propTypes = {
  hasButton: PropTypes.bool,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
