import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconClockBig from 'images/icons/clockBig.svg';
import iconPublished from 'images/icons/published.svg';
import styles from './RoadmapItem.css';

class RoadmapItem extends Component {
  render() {
    const isToRight = this.props.index % 2 === 0;

    const classes = isToRight
      ? [styles.wrapper, styles.isToRight]
      : [styles.wrapper];

    const isPublished = this.props.data.status === 'Executado';
    const icon = isPublished ? iconPublished : iconClockBig;
    const alt = isPublished ? 'Publicado' : 'Em breve';
    const soon = !isPublished ? null : (
      <div className={styles.soon}>{this.props.data.status}</div>
    );

    return (
      <li className={classes.join(' ')}>
        <div className={styles.middle}>
          <div className={styles.line} />
          <img src={icon} alt={alt} />
        </div>
        <div className={styles.content}>
          {soon}
          <h2>{this.props.data.title}</h2>
          <p>{this.props.data.description}</p>
        </div>
      </li>
    );
  }
}

RoadmapItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default RoadmapItem;
