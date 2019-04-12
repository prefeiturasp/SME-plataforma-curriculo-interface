import React from 'react';
import PropTypes from 'prop-types';
import Classroom from './Classroom';
import styles from 'views/classrooms/School.scss';

class School extends React.PureComponent {
  render() {
    const { classrooms, name } = this.props;

    const items = classrooms.map((classroom, i) => {
      return (
        <Classroom
          key={i}
          level={classroom.level}
          name={classroom.name}
          year={classroom.year}
        />
      );
    });

    return (
      <div className={styles.wrapper}>
        <div className={styles.toggler}>
          <h2>
            {name} ({classrooms.length})
          </h2>
        </div>
        {items}
      </div>
    );
  }
}

School.propTypes = {
  classrooms: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default School;
