import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconClockBig from '../../images/iconClockBig.svg';
import iconPublished from '../../images/iconPublished.svg';
import styles from './RoadmapItem.css';

class RoadmapItem extends Component {
  render() {
    const isToRight = this.props.index % 2 === 0;
    const icon = this.props.data.isPublished ? iconPublished : iconClockBig;
    const alt = this.props.data.isPublished ? 'Publicado' : 'Em breve';

    const contentLeft = isToRight ? (
        <div className={styles.left} />
      ) : (
        <div className={styles.left}>
          <h2>{this.props.data.title}</h2>
          <p>{this.props.data.text}</p>
        </div>
      );

    const contentRight = isToRight ? (
        <div className={styles.right}>
          <h2>{this.props.data.title}</h2>
          <p>{this.props.data.text}</p>
        </div>
      )  :(
        <div className={styles.right} />
      );

    return (
      <li className={styles.wrapper}>
        {contentLeft}
        <div className={styles.middle}>
          <img src={icon} alt={alt} />
        </div>
        {contentRight}
      </li>
    );
  }
}

RoadmapItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default RoadmapItem;
