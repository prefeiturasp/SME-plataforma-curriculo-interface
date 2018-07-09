import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../constants';
import iconClock from '../../images/iconClock.svg';
import styles from './ActivityItem.css';

class ActivityItem extends Component {
  render() {
    const data = this.props.data;
    const link = `/sequencia/${this.props.sequenceSlug}/atividade/${data.slug}`;
    const word = data.estimated_time > 1 ? 'aulas' : 'aula';
    const duration = `${data.estimated_time} ${word}`;
    
    return (
      <li className="col-6 col-sm-6 col-md-6 col-lg-3">
        <NavLink to={link} className={styles.wrapper}>
          <div className={styles.image}>
            <img
              src={API_URL + data.image_attributes.default_url}
              srcSet={`${API_URL}${data.image_attributes.small.url}, ${API_URL}${data.image_attributes.extra_small.url} 2x`}
              alt={data.name} />
            <span>{this.props.index}</span>
          </div>
          <div className={styles.title}>
            {data.title}
          </div>
          <div className={styles.classes}>
            <img src={iconClock} alt="Número de aulas" />
            {duration}
          </div>
        </NavLink>
      </li>
    );
  }
}

ActivityItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  sequenceSlug: PropTypes.string.isRequired,
};

export default ActivityItem;
