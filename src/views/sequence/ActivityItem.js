import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './ActivityItem.css';

class ActivityItem extends Component {
  render() {
    const link = `/atividade/${this.props.data.id}`;

    return (
      <li className="col-sm-12 col-md-6 col-lg-3">
        <NavLink to={link} className={styles.wrapper}>
          <div className={styles.image}>
            <img
              src={this.props.data.image}
              alt={this.props.data.name} />
          </div>
          <div className={styles.title}>
            {this.props.data.name}
          </div>
          <div className={styles.classes}>
            <i className="fa fa-clock" />
            {this.props.data.classes} aulas
          </div>
        </NavLink>
      </li>
    );
  }
}

ActivityItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ActivityItem;
