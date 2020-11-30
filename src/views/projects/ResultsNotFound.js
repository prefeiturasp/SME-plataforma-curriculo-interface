import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';
import ProjectsActions from 'actions/ProjectsActions';
import styles from 'views/sequences/ResultsNotFound.scss';

class ResultsNotFound extends Component {
  onClicked = () => {
    this.props.clearSearch();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p>
          O projeto que você procura não foi encontrado. Mas você pode
          procurar por outras projetos usando filtros diferentes.
        </p>
        <button className="btn" onClick={this.onClicked}>
          Fazer nova busca
        </button>
      </div>
    );
  }
}

ResultsNotFound.propTypes = {
  clearSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => {
      dispatch(ProjectFiltersActions.clearFilters());
      dispatch(ProjectsActions.load());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ResultsNotFound);
