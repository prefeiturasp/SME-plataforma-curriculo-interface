import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'data/constants';
import styles from 'views/activity/SequencePreview.scss';

class ChallengePreview extends Component {
  render() {
    const { challenge } = this.props;

    const image = challenge.image_attributes.default_url ? (
      <img
        className={styles.image}
        src={API_URL + challenge.image_attributes.default_url}
        alt={challenge.title}
      />
    ) : null;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {image}
          <div className={styles.info1}>
            <p>Desafio</p>
            <h1>{challenge.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

ChallengePreview.propTypes = {
  challenge: PropTypes.object.isRequired,
};

export default ChallengePreview;
