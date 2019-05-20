import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'data/constants';
import arrowRight from 'images/arrows/right.svg';
import styles from './OtherMethodology.scss';

class OtherMethodology extends Component {
  render() {
    const { data } = this.props;
    const { slug, title } = data;
    const link = `/metodologia/${slug}`;

    return (
      <div className={styles.wrapper}>
        <NavLink to={link} className={styles.box} aria-label={title}>
          <img
            src={API_URL + data.image_attributes.default_url}
            alt={title}
          />
          <h3>{title}</h3>
          <div className={styles.btn}>
            <img src={arrowRight} alt={title} />
          </div>
        </NavLink>
      </div>
    );
  }
}

OtherMethodology.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OtherMethodology;
