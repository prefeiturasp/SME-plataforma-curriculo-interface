import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import createModalLink from 'utils/createModalLink';
import styles from './KnowledgeMatrixItem.scss';

class KnowledgeMatrixItem extends Component {
  render() {
    const link = createModalLink(
      `/matriz-de-saberes/${this.props.data.sequence}`
    );

    const contents = (
      <div className={styles.wrapper}>
        <div className={styles.number}>{this.props.data.sequence}</div>
        <div className={styles.label}>{this.props.data.title}</div>
      </div>
    );

    return this.props.isLink ? (
      <NavLink to={link}>{contents}</NavLink>
    ) : (
      contents
    );
  }
}

KnowledgeMatrixItem.propTypes = {
  data: PropTypes.object.isRequired,
  isLink: PropTypes.bool,
};

export default KnowledgeMatrixItem;
