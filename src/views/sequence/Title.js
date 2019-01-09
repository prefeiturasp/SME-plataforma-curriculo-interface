import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import createModalLink from 'utils/createModalLink';
import isLogged from 'data/isLogged';
import iconSave from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './Title.scss';

class Title extends Component {
  render() {
    const { hasButton, isSaved, slug, text, title } = this.props;

    const link = createModalLink(`/sequencia/${slug}/salvar`);
    const icon = isSaved ? iconSaved : iconSave;
    const label = isSaved ? 'Salvo' : 'Salvar';

    const button =
      hasButton && isLogged() ? (
        <NavLink className={styles.btnSave} to={link}>
          <img src={icon} alt={label} />
          {label}
        </NavLink>
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
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
