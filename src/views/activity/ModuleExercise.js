import React from 'react';
import PropTypes from 'prop-types';
import iconRodaDeConversa from '../../images/activity/roda-de-conversa.svg';
import styles from './ModuleExercise.scss';

class ModuleExercise extends React.PureComponent {
  render() {
    let title;
    let icon;

    switch (this.props.type) {
      default:
        title = 'Roda de conversa';
        icon = iconRodaDeConversa;
    }

    return (
      <div className={styles.wrapper}>
        <h4>{title}</h4>
        <div className={styles.icon}>
          <img
            src={icon}
            alt={title}
          />
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.text}} />
      </div>
    );
  }
}

ModuleExercise.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ModuleExercise;
