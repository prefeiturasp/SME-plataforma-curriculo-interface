import React from 'react';
import PropTypes from 'prop-types';
import CurricularComponentItem from '../../common/CurricularComponentItem';
import YearItem from '../collections/YearItem';
import styles from './ClassroomItem.scss';

class ClassroomItem extends React.PureComponent {
  render() {
    const { components, level, name, year } = this.props;

    const items = components.map((component, i) => {
      return (
        <CurricularComponentItem
          key={i}
          data={component}
          isColored={true}
        />
      );
    });

    return (
      <div className={styles.wrapper}>
        <YearItem
          size={50}
          year={year}
        />
        <div className={styles.info}>
          <div>
            {name} | {level}
          </div>
          <ul>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

ClassroomItem.propTypes = {
  components: PropTypes.array.isRequired,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default ClassroomItem;
