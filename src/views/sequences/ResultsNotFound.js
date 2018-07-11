import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersActions from '../../actions/FiltersActions';
import styles from './ResultsNotFound.css';

class ResultsNotFound extends Component {
  onClicked() {
    this.props.clearSearch();
  }

  render() {
    return (
      <div className="container">
        <div className={styles.wrapper}>
          <div className="col-md-6 offset-md-3">
            <p>A sequência que você procura não foi encontrada. Mas você pode procurar por outras sequências usando filtros diferentes.</p>
            <button className="btn" onClick={this.onClicked.bind(this)}>
              Fazer nova busca
            </button>
          </div>
        </div>
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
    },
  };
};

export default connect(null, mapDispatchToProps)(ResultsNotFound);
