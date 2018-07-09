import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './KnowledgeMatrixItem.css';

class KnowledgeMatrixItem extends Component {
  render() {
    const link = `/matriz-de-saberes/${this.props.data.sequence}`;

    return this.props.isLink ? (
      <li className={styles.wrapper}>
        <NavLink to={link}>
          <div>{this.props.data.sequence}</div>
          <div>{this.props.data.title}</div>
        </NavLink>
      </li>
    ) : (
      <li className={styles.wrapper}>
        <div>{this.props.data.sequence}</div>
        <div>{this.props.data.title}</div>
      </li>
    );
  }
}

KnowledgeMatrixItem.propTypes = {
  data: PropTypes.object.isRequired,
  isLink: PropTypes.bool,
};

export default KnowledgeMatrixItem;
