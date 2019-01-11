import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import ClassroomYear from './ClassroomYear';
import CollectionActions from 'actions/CollectionActions';
import styles from './Collection.scss';

class Collection extends React.PureComponent {
  onClicked = () => {
    const { id, name, sequenceId } = this.props;
    this.props.saveSequence(id, name, sequenceId);
    history.goBack();
  };

  render() {
    const { name, years } = this.props;

    const items = years.map((year, i) => {
      return (
        <ClassroomYear
          key={i}
          index={i}
          color={year.color}
          year={year.year}
          tooltip={year.school}
        />
      );
    });

    return (
      <button className={styles.wrapper} onClick={this.onClicked}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.years}>{items}</div>
      </button>
    );
  }
}

Collection.propTypes = {
  id: PropTypes.number.isRequired,
  sequenceId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  years: PropTypes.array.isRequired,
};

Collection.defaultProps = {
  years: [
    {
      color: '#ff0180',
      year: '1A',
      school: 'EMEF Maria da Silva'
    }
  ],
};

const mapDispatchToProps = dispatch => {
  return {
    saveSequence: (id, name, sequenceId) => {
      dispatch(CollectionActions.saveSequence(id, name, sequenceId));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Collection);
