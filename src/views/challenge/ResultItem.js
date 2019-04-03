import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './ResultItem.scss';

class ResultItem extends Component {
  render() {
    const { data } = this.props;
    const link = `/resultado/${data.id}`;
    const icon = null;
    const when = '30 min atrás';

    return (
      <NavLink to={link} className={styles.wrapper} aria-label={data.author.name}>
        <div className={styles.info}>
          <div className={styles.avatar}>
          </div>
          <div>
            <div className={styles.name}>{data.author.name}</div>
            <div className={styles.date}>{data.year} &middot; {when}</div>
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
};

export default ResultItem;
