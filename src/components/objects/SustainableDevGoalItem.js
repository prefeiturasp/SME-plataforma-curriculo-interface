import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'data/constants';
import createModalLink from 'utils/createModalLink';
import styles from './SustainableDevGoalItem.scss';

class SustainableDevGoalItem extends Component {
  render() {
    const { data, isLink } = this.props;
    const { id, name } = data;

    const link = createModalLink(`/ods/${id}`);

    const contents = (
      <div className={styles.wrapper}>
        <img src={API_URL + data.icon_url} alt={name} />
      </div>
    );

    return isLink ? <NavLink to={link}>{contents}</NavLink> : contents;
  }
}

SustainableDevGoalItem.propTypes = {
  data: PropTypes.object.isRequired,
  isLink: PropTypes.bool,
};

export default SustainableDevGoalItem;
