import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleExercise.scss';

class ModuleExercise extends React.PureComponent {
  render() {
    const { icon, text, title } = this.props;
    
    return (
      <div className={styles.wrapper}>
        <h4>{title}</h4>
        <div className={styles.icon}>
          <img
            src={icon}
            alt={title}
          />
        </div>
        <div dangerouslySetInnerHTML={{__html: text}} />
      </div>
    );
  }
}

ModuleExercise.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModuleExercise;
