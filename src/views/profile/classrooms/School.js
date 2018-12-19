import React from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';
import Classroom from './Classroom';
import chevronDown from 'images/chevrons/down.svg';
import chevronUp from 'images/chevrons/up.svg';
import styles from './School.scss';

class School extends React.PureComponent {
  state = { isExpanded: true };

  onToggled = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { classrooms, name } = this.props;

    const items = classrooms.map((classroom, i) => {
      return (
        <Classroom
          key={i}
          components={classroom.components}
          level={classroom.level}
          name={classroom.name}
          year={classroom.year}
        />
      );
    });

    const classes = this.state.isExpanded
      ? [styles.toggler, styles.isExpanded]
      : [styles.toggler];
    const height = this.state.isExpanded ? 'auto' : 0;
    const chevron = this.state.isExpanded ? chevronUp : chevronDown;
    const alt = this.state.isExpanded ? 'Esconder' : 'Exibir';

    return (
      <div className={styles.wrapper}>
        <div className={[classes.join(' ')]} onClick={this.onToggled}>
          <h2>
            {name} ({classrooms.length})
          </h2>
          <img src={chevron} alt={alt} width={12} />
        </div>
        <AnimateHeight duration={300} height={height}>
          {items}
        </AnimateHeight>
      </div>
    );
  }
}

School.propTypes = {
  classrooms: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default School;
