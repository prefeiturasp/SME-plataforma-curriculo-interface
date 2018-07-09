import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './KnowledgeMatrixButton.css';

class KnowledgeMatrixButton extends Component {
  render() {
    const link = `/matriz-de-saberes/${this.props.data.sequence}`;
    
    return (
      <li className="col-md-6 col-lg-4">
        <NavLink to={link} className={styles.wrapper}>
          <div className={styles.number}>
            {this.props.data.sequence}
          </div>
          <div className={styles.label}>
            {this.props.data.title}
          </div>
        </NavLink>
      </li>
    );
  }
}

KnowledgeMatrixButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default KnowledgeMatrixButton;
