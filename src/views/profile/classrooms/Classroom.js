import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'components/objects/Chip';
import ClassroomYear from 'components/objects/ClassroomYear';
import styles from './Classroom.scss';

class Classroom extends React.PureComponent {
  render() {
    const { components, level, name, year } = this.props;

    const items = components.map((component, i) => {
      return <Chip key={i} data={component} isSmall={true} />;
    });

    return (
      <div className={styles.wrapper}>
        <ClassroomYear size={50} year={year} />
        <div className={styles.info}>
          <div className={styles.name}>
            {name} | {level}
          </div>
          <div className={styles.list}>{items}</div>
        </div>
      </div>
    );
  }
}

Classroom.propTypes = {
  components: PropTypes.array.isRequired,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Classroom;
