import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './KnowledgeMatrixItem.css';

class KnowledgeMatrixItem extends Component {
  render() {
    return (
      <li className={styles.wrapper}>
        <div>{this.props.data.number}</div>
        <div>{this.props.data.name}</div>
      </li>
    );
  }
}

KnowledgeMatrixItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default KnowledgeMatrixItem;
