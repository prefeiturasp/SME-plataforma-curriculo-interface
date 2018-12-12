import React from 'react';
import PropTypes from 'prop-types';
import getExerciseTypeIcon from './getExerciseTypeIcon';
import styles from './ModuleExercise.scss';

class ModuleExercise extends React.PureComponent {
  render() {
    const { text, type } = this.props;
    const icon = getExerciseTypeIcon(type);

    return (
      <div className={styles.wrapper}>
        <h4>{type}</h4>
        <div className={styles.icon}>
          <img
            src={icon}
            alt={type}
          />
        </div>
        <div dangerouslySetInnerHTML={{__html: text}} />
      </div>
    );
  }
}

ModuleExercise.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ModuleExercise;
