import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersActions from 'actions/FiltersActions';
import SequencesActions from 'actions/SequencesActions';
import styles from './ResultsNotFound.scss';

class ResultsNotFound extends Component {
  onClicked = () => {
    this.props.clearSearch();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p>
          A sequência que você procura não foi encontrada. Mas você pode
          procurar por outras sequências usando filtros diferentes.
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
      dispatch(FiltersActions.clearFilters());
      dispatch(SequencesActions.load());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ResultsNotFound);
