import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import FiltersActions from 'actions/FiltersActions';
import iconSearch from 'images/icons/search.svg';
import styles from './SearchField.scss';

class SearchField extends Component {
  state = { query: '' };

  onChangedQuery = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <img src={iconSearch} alt="Buscar" />
        <TextField
          classes={{ root: styles.field }}
          label="Buscar sequência por tema"
          onChange={this.onChangedQuery}
          value={this.state.query}
        />
      </div>
    );
  }
}

SearchField.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    setQuery: value => {
      dispatch(FiltersActions.setQuery(value));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchField);
