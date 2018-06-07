import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconClockBig from '../../images/iconClockBig.svg';
import iconPublished from '../../images/iconPublished.svg';
import styles from './RoadmapItem.css';

class RoadmapItem extends Component {
  render() {
    const isToRight = this.props.index % 2 === 0;

    const classes = isToRight ? [styles.wrapper, styles.isToRight] : [styles.wrapper];

    const icon = this.props.data.isPublished ? iconPublished : iconClockBig;
    const alt = this.props.data.isPublished ? 'Publicado' : 'Em breve';

    const soon = this.props.data.isPublished ? null : (
      <div className={styles.soon}>
        Em breve
      </div>
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
          <p>{this.props.data.text}</p>
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
