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
      history.push(`/projeto/${this.props.slug}/salvar`, { isModal: true });
    } else {
      history.push(`/login`, { isModal: true });
    }
  };

  render() {
    const { hasButton, isSaved, text, project } = this.props;

    const icon = isSaved ? iconSaved : iconSave;
    const label = isSaved ? 'Salvo' : 'Salvar';

    const button = hasButton ? (
      <button className={styles.btnSave} onClick={this.onClickedSave}>
        <img src={icon} alt={label} />
        {label}
      </button>
    ) : null;

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>{text}</p>
          <h1>{project.title}</h1>
        </div>
        {button}
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
};

export default Title;
