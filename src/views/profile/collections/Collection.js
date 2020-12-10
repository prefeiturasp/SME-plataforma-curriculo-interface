import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ClassroomYear from 'components/objects/ClassroomYear';
import styles from './Collection.scss';

class Collection extends React.PureComponent {
  render() {
    const { id, name, numSequences, years, numProjects } = this.props;
    const link = `/colecao/${id}`;
    const word1 = numSequences === 1 ? 'sequência' : 'sequências';
    const word2 = numProjects === 1 ? 'projeto' : 'projetos';

    const items = years.map((year, i) => {
      return <ClassroomYear key={i} color={year.color} year={year.year} />;
    });

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <NavLink to={link} className={styles.wrapper}>
          <div className={styles.info}>
            <h4>{name}</h4>
            <p>
              {numSequences} {word1}
            </p>
            <p>
              {numProjects} {word2}
            </p>
          </div>
          <div className={styles.years}>{items}</div>
        </NavLink>
      </div>
    );
  }
}

Collection.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  numClassrooms: PropTypes.number.isRequired,
  numSequences: PropTypes.number.isRequired,
  years: PropTypes.array.isRequired,
};

Collection.defaultProps = {
  numClassrooms: 0,
  numSequences: 0,
  years: [],
};

export default Collection;
