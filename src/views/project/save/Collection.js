import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import ClassroomYear from './ClassroomYear';
import CollectionActions from 'actions/CollectionActions';
import styles from './Collection.scss';

class Collection extends React.PureComponent {
  onClicked = () => {
    const { id, name, projectId } = this.props;
    this.props.saveProject(id, name, projectId);
    history.goBack();
  };

  render() {
    const { name, years } = this.props;

    console.log(name)
    console.log(years)

    return (
      <button className={styles.wrapper} onClick={this.onClicked}>
        <h4 className={styles.title}>{name}</h4>
      </button>
    );
  }
}

Collection.propTypes = {
  id: PropTypes.number.isRequired,
  projectId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  years: PropTypes.array.isRequired,
};

Collection.defaultProps = {
  years: [],
};

const mapDispatchToProps = dispatch => {
  return {
    saveProject: (id, name, projectId) => {
      dispatch(CollectionActions.saveProject(id, name, projectId));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Collection);
