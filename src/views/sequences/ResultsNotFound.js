import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import FiltersActions from '../../actions/FiltersActions.js';
import SequencesActions from '../../actions/SequencesActions.js';
import styles from './ResultsNotFound.css';

class ResultsNotFound extends Component {
  onClicked() {
    this.props.clearSearch();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p>A sequência que você procura não foi encontrada.<br/>
        Mas você pode procurar por outras sequências usando filtros diferentes.</p>
        <button className="btn" onClick={this.onClicked.bind(this)}>
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
      dispatch(SequencesActions.clearSearch());
    },
  };
};

export default connect(null, mapDispatchToProps)(ResultsNotFound);
