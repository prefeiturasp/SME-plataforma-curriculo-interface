import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { history } from 'index';
import isLogged from 'data/isLogged';
import iconSave from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './Title.scss';

class Title extends Component {
  onClickedSave = () => {
    if (isLogged()) {
      history.push(`/sequencia/${this.props.slug}/salvar`, { isModal: true });
    } else {
      history.push(`/login`, { isModal: true });
    }
  };

  render() {
    const { deadline, isSaved, title } = this.props;

    let btnSave1 = null;
    let btnSave2 = null;
    const icon = isSaved ? iconSaved : iconSave;
    const label = isSaved ? 'Salvo' : 'Salvar';
    
    btnSave1 = (
      <button className={styles.btnSave1} onClick={this.onClickedSave}>
        <img src={icon} alt={label} />
        {label}
      </button>
    );

    btnSave2 = (
      <button className={styles.btnSave2} onClick={this.onClickedSave}>
        <img src={icon} alt={label} />
        {label}
      </button>
    );

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>Desafio em andamento até <strong>{deadline}</strong></p>
          <h1>{title}</h1>
        </div>
        {btnSave1}
        {btnSave2}
      </div>
    );
  }
}

Title.propTypes = {
  deadline: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
