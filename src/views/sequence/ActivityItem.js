import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import iconClock from '../../images/iconClock.svg';
import styles from './ActivityItem.css';

class ActivityItem extends Component {
  render() {
    const link = `/atividade/${this.props.data.id}`;

    return (
      <li className="col-6 col-sm-6 col-md-6 col-lg-3">
        <NavLink to={link} className={styles.wrapper}>
          <div className={styles.image}>
            <img
              src={this.props.data.image}
              alt={this.props.data.name} />
            <span>{this.props.index}</span>
          </div>
          <div className={styles.title}>
            {this.props.data.name}
          </div>
          <div className={styles.classes}>
            <img src={iconClock} />
            {this.props.data.classes} aulas
          </div>
        </NavLink>
      </li>
    );
  }
}

ActivityItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ActivityItem;
