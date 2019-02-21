import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleTeacher.scss';

class ModuleTeacher extends React.PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <h4>Professor(a):</h4>
        <div dangerouslySetInnerHTML={{__html: this.props.text}} />
      </div>
    );
  }
}

ModuleTeacher.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ModuleTeacher;
