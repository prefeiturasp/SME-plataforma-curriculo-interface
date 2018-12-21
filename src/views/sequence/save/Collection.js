import React from 'react';
import PropTypes from 'prop-types';
import ClassroomYear from 'components/objects/ClassroomYear';
import styles from './Collection.scss';

class Collection extends React.PureComponent {
  render() {
    const { title, years } = this.props;
    
    const items = years.map((year, i) => {
      return <ClassroomYear key={i} color={year.color} year={year.year} />;
    });

    return (
      <button className={styles.wrapper}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.years}>{items}</div>
      </button>
    );
  }
}

Collection.propTypes = {
  title: PropTypes.string.isRequired,
  years: PropTypes.array.isRequired,
};

export default Collection;
