import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Avatar from 'components/objects/Avatar';
import iconClip from 'images/icons/clip.svg';
import styles from './ResultItem.scss';

class ResultItem extends Component {
  render() {
    const { data, slug } = this.props;
    const link = `/desafio/${slug}/resultado/${data.id}`;
    const icon = data.attachments.length ? <img src={iconClip} alt="Anexos" className={styles.icon} /> : null;
    
    return (
      <NavLink to={link} className={styles.wrapper} aria-label={data.author.name}>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <Avatar
              nickname={data.author.name}
              photo={data.author.photo}
              size={50}
            />
          </div>
          <div>
            <div className={styles.name}>{data.author.name}</div>
            <div className={styles.date}>{data.year} &middot; {data.time}</div>
          </div>
          {icon}
        </div>
        <p className={styles.text}>{data.text}</p>
      </NavLink>
    );
  }
}

ResultItem.propTypes = {
  data: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ResultItem;
