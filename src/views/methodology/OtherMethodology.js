import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import arrowRight from 'images/arrows/right.svg';
import styles from 'views/technologies/Methodology.scss';

class OtherMethodology extends Component {
  render() {
    const { image, slug, title } = this.props.data;
    const link = `/metodologia/${slug}`;

    return (
      <div className={styles.wrapper3}>
        <NavLink to={link} className={styles.box} aria-label={title}>
          <img src={image} alt={title} />
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
