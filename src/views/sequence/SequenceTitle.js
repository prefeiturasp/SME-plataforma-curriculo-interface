import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconSave from 'images/icons/save.svg';
import styles from './SequenceTitle.scss';

class SequenceTitle extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>Sequência de atividades</p>
          <h1>
            {this.props.title}
          </h1>
        </div>
        <button className={styles.btnSave}>
          <img src={iconSave} alt="Salvar" />
          Salvar
        </button>
      </div>
    );
  }
}

SequenceTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SequenceTitle;
