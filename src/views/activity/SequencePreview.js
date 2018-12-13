import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'data/constants';
import iconSave from 'images/icon/save.svg';
import styles from './SequencePreview.scss';

class SequencePreview extends Component {
  render() {
    const { data, sequence } = this.props;

    const image = data.image_attributes.default_url
      ? <img
          className={styles.image}
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
          alt={sequence.title}
        />
      : null;

    const link = `/sequencia/${sequence.slug}`;

    return (
      <Sticky>
        <div className={styles.wrapper}>
          {image}
          <div>
            <p>Sequência de atividades</p>
            <NavLink to={link}>
              <h1>{sequence.title}</h1>
            </NavLink>
          </div>
          <button className={styles.btn}>
            <img src={iconSave} alt="Salvar" />
            Salvar
          </button>
        </div>
      </Sticky>
    );
  }
}

SequencePreview.propTypes = {
  data: PropTypes.object.isRequired,
  sequence: PropTypes.object.isRequired,
}

export default SequencePreview;
