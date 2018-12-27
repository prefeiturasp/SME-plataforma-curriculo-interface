import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ClassroomYear from 'components/objects/ClassroomYear';
import CollectionActions from 'actions/CollectionActions';
import styles from './Collection.scss';

class Collection extends React.PureComponent {
  onClicked = () => {
    this.props.saveSequence(this.props.id, this.props.sequenceId);
    this.props.history.goBack();
  };

  render() {
    const { name, years } = this.props;

    const items = years.map((year, i) => {
      return <ClassroomYear key={i} color={year.color} year={year.year} />;
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
  years: [],
};

const mapDispatchToProps = dispatch => {
  return {
    saveSequence: (id, sequenceId) => {
      dispatch(CollectionActions.saveSequence(id, sequenceId));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Collection));
