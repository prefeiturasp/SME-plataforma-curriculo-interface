import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenericItem from 'components/objects/GenericItem';
import iconClock from 'images/icon/clock.svg';
import iconClockWhite from 'images/icon/clockWhite.svg';
import styles from './SequenceCover.scss';
import { API_URL } from 'data/constants';

class SequenceCover extends React.Component {
  render() {
    const { data, sequence } = this.props;
    
    const filters = [
      <GenericItem key={0} data={{name: sequence.year}} />,
      <GenericItem key={1} data={sequence.main_curricular_component} />,
    ];

    const image = data.image_attributes.default_url
      ? <img
          className={styles.image}
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
          alt={data.title}
        />
      : null;

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
            <em>{data.estimated_time}</em>
            {word}
          </div>
        </div>
      );
    }     

    return (     
      <div className={classes.join(' ')}>
        {image}
        <ul>
          {filters}
        </ul>
        {duration}
      </div>
    );
  }
}

SequenceCover.propTypes = {
  data: PropTypes.object.isRequired,
  sequence: PropTypes.object.isRequired,
};

export default SequenceCover;
