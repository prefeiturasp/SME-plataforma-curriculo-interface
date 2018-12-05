import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleStudent.scss';

class ModuleStudent extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h4>Para o(a) estudante:</h4>
        <div dangerouslySetInnerHTML={{__html: this.props.text}} />
      </div>
    );
  }
}

ModuleStudent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ModuleStudent;
