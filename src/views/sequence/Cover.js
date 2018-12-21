import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PillItem from 'components/objects/PillItem';
import iconClock from 'images/icons/clock.svg';
import iconClockWhite from 'images/icons/clockWhite.svg';
import styles from './Cover.scss';
import { API_URL } from 'data/constants';

class Cover extends Component {
  render() {
    const { data, sequence } = this.props;

    const image = data.image_attributes.default_url ? (
      <img
        className={styles.image}
        src={API_URL + data.image_attributes.default_url}
        srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${
          data.image_attributes.extra_large.url
        } 2x`}
        alt={data.title}
      />
    ) : null;

    const classes = image
      ? [styles.wrapper, styles.withImage]
      : [styles.wrapper];

    let duration = null;
    if (data.estimated_time) {
      const icon = image ? iconClockWhite : iconClock;
      const word = data.estimated_time > 1 ? 'aulas' : 'aula';
      duration = (
        <div className={styles.duration}>
          <img src={icon} alt="Número de aulas" />
          <div>
            <em>{data.estimated_time}</em> {word} <span>(Tempo estimado)</span>
          </div>
        </div>
      );
    }

    return (
      <div className={classes.join(' ')}>
        {image}
        <div className={styles.list}>
          <PillItem data={{ name: sequence.year }} />
          <PillItem data={sequence.main_curricular_component} />
        </div>
        {duration}
      </div>
    );
  }
}

Cover.propTypes = {
  data: PropTypes.object.isRequired,
  sequence: PropTypes.object.isRequired,
};

export default Cover;
