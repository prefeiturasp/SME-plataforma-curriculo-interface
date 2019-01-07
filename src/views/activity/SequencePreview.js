import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'data/constants';
import createModalLink from 'utils/createModalLink';
import isLogged from 'data/isLogged';
import iconSave from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './SequencePreview.scss';

class SequencePreview extends Component {
  state = {
    isSaved: false,
  };

  render() {
    const { isInActivity, sequence } = this.props;
    const { isSaved } = this.state;

    const image = sequence.image_attributes.default_url ? (
      <img
        className={styles.image}
        src={API_URL + sequence.image_attributes.default_url}
        srcSet={`${API_URL}${sequence.image_attributes.large.url}, ${API_URL}${
          sequence.image_attributes.extra_large.url
        } 2x`}
        alt={sequence.title}
      />
    ) : null;

    let btnSave = null;
    let title = <h1>{sequence.title}</h1>;

    if (isInActivity) {
      const linkSequence = `/sequencia/${sequence.slug}`;

      title = <NavLink to={linkSequence}>{title}</NavLink>;

      const icon = isSaved ? iconSaved : iconSave;
      const label = isSaved ? 'Salvo' : 'Salvar';
      const linkSave = createModalLink(`/sequencia/${sequence.slug}/salvar`);

      btnSave = isLogged() ? (
        <NavLink className={styles.btnSave} to={linkSave}>
          <img src={icon} alt={label} />
          {label}
        </NavLink>
      ) : null;
    }

    return (
      <Sticky>
        <div className={styles.wrapper}>
          {image}
          <div>
            <p>Sequência de atividades</p>
            {title}
          </div>
          {btnSave}
        </div>
      </Sticky>
    );
  }
}

SequencePreview.propTypes = {
  isInActivity: PropTypes.bool,
  sequence: PropTypes.object.isRequired,
};

export default SequencePreview;
