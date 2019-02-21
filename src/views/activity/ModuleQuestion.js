import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleQuestion.scss';

class ModuleQuestion extends React.PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.number}>
            {this.props.number}
          </div>
          <h4>
            {this.props.title}
          </h4>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.text}} />
      </div>
    );
  }
}

ModuleQuestion.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModuleQuestion;
