import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClassroomYear.scss';

class ClassroomYear extends React.PureComponent {
  render() {
    const { color, size, year } = this.props;
    const style = {};
    
    if (color) {
      style.backgroundColor = color;
    }

    if (size) {
      style.fontSize = size * 0.3;
      style.width = size;
      style.height = size;
    }

    return (
      <div
        className={styles.wrapper}
        style={style}
      >
        {year}
      </div>
    );
  }
}

ClassroomYear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  year: PropTypes.string.isRequired,
};

export default ClassroomYear;
