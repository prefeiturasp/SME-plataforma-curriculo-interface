import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconClockBig from '../../images/iconClockBig.svg';
import iconPublished from '../../images/iconPublished.svg';
import styles from './RoadmapItem.css';

class RoadmapItem extends Component {
  render() {
    const soon = this.props.data.isPublished ? null : (
      <div className={styles.soon}>
        Em breve
      </div>
    );

    const isToRight = this.props.index % 2 === 0;
    
    const contentClass = isToRight ? styles.right : styles.left;
    const content = (
      <div className={contentClass}>
        {soon}
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.text}</p>
      </div>
    );

    const emptyClass = isToRight ? styles.left : styles.right;
    const empty = <div className={emptyClass} />

    const contentLeft = isToRight ? empty : content;
    const contentRight = isToRight ? content : empty;

    const icon = this.props.data.isPublished ? iconPublished : iconClockBig;
    const alt = this.props.data.isPublished ? 'Publicado' : 'Em breve';

    return (
      <li className={styles.wrapper}>
        {contentLeft}
        <div className={styles.middle}>
          <div className={styles.line} />
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
