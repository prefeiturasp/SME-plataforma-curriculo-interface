import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'data/constants';
import styles from './BigSequencePreview.scss';

class BigSequencePreview extends Component {
  render() {
    const { sequence } = this.props;

    const image =
      sequence.image_attributes && sequence.image_attributes.default_url ? (
        <img
          className={styles.image}
          src={API_URL + sequence.image_attributes.default_url}
          srcSet={`${API_URL}${
            sequence.image_attributes.large.url
          }, ${API_URL}${sequence.image_attributes.extra_large.url} 2x`}
          alt={sequence.title}
        />
      ) : null;

    return (
      <div className={styles.wrapper}>
        {image}
        <p>Sequência de atividades</p>
        <h1>{sequence.title}</h1>
      </div>
    );
  }
}

BigSequencePreview.propTypes = {
  sequence: PropTypes.object.isRequired,
};

export default BigSequencePreview;
