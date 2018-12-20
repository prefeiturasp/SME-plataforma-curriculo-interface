import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'data/constants';
import createModalLink from 'utils/createModalLink';
import styles from './SustainableDevGoalItem.scss';

class SustainableDevGoalItem extends Component {
  render() {
    const image = (
      <img
        src={API_URL + this.props.data.icon_url}
        alt={this.props.data.name}
      />
    );

    const link = createModalLink(`/ods/${this.props.data.id}`);

    return this.props.isLink ? (
      <li className={styles.wrapper}>
        <NavLink to={link}>{image}</NavLink>
      </li>
    ) : (
      <li className={styles.wrapper}>{image}</li>
    );
  }
}

SustainableDevGoalItem.propTypes = {
  data: PropTypes.object.isRequired,
  isLink: PropTypes.bool,
};

export default SustainableDevGoalItem;
