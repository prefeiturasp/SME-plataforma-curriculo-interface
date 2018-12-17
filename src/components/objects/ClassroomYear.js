import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClassroomYear.scss';

class ClassroomYear extends React.PureComponent {
  render() {
    const { color, isBordered, isDimmed, size, year } = this.props;

    const classes = [styles.wrapper];
    if (isBordered) {
      classes.push(styles.isBordered);
    }

    const style = {};

    if (color && !isDimmed) {
      style.backgroundColor = color;
    }

    if (size) {
      style.fontSize = size * 0.3;
      style.width = size;
      style.height = size;
    }

    return (
      <div className={classes.join(' ')} style={style}>
        {year}
      </div>
    );
  }
}

ClassroomYear.propTypes = {
  color: PropTypes.string,
  isBordered: PropTypes.bool,
  isDimmed: PropTypes.bool,
  size: PropTypes.number,
  year: PropTypes.string.isRequired,
};

export default ClassroomYear;
