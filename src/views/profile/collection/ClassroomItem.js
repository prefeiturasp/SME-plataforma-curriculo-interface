import React from 'react';
import PropTypes from 'prop-types';
import ClassroomYear from 'components/objects/ClassroomYear';
import styles from './ClassroomItem.scss';

class ClassroomItem extends React.PureComponent {
  state = {
    isSelected: false,
  };

  onClicked = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  }

  render() {
    const { color, level, name, school, year } = this.props;

    return (
      <button
        className={styles.wrapper}
        onClick={this.onClicked}
      >
        <ClassroomYear
          color={color}
          isBordered={this.state.isSelected}
          isDimmed={!this.state.isSelected}
          size={50}
          year={year}
        />
        <div className={styles.info}>
          <h4>
            {name} {year} {level}
          </h4>
          <p>
            {school}
          </p>
        </div>
      </button>
    );
  }
}

ClassroomItem.propTypes = {
  color: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default ClassroomItem;
