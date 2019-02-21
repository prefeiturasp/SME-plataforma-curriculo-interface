import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'data/constants';
import iconClock from 'images/icons/clock.svg';
import styles from './ActivityItem.scss';

class ActivityItem extends Component {
  render() {
    const data = this.props.data;
    const link = `/atividade/${this.props.sequenceSlug}/${data.slug}`;
    const duration = data.estimated_time || 0;
    const word = duration > 1 ? 'aulas' : 'aula';

    const image = data.image_attributes.default_url ? (
      <img
        src={API_URL + data.image_attributes.default_url}
        srcSet={`${API_URL}${data.image_attributes.small.url}, ${API_URL}${
          data.image_attributes.extra_small.url
        } 2x`}
        alt={data.name}
      />
    ) : null;

    return (
      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4">
        <NavLink to={link} className={styles.wrapper}>
          <div className={styles.image}>
            {image}
            <div>{this.props.index}</div>
          </div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.classes}>
            <img src={iconClock} alt="Número de aulas" />
            {duration} {word}
          </div>
        </NavLink>
      </div>
    );
  }
}

ActivityItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  sequenceSlug: PropTypes.string.isRequired,
};

export default ActivityItem;
