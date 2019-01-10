import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import BodyActions from 'actions/BodyActions';
import FiltersActions from 'actions/FiltersActions';
import SequencesActions from 'actions/SequencesActions';
import iconSearch from 'images/icons/search.svg';
import styles from './SearchField.scss';

class SearchField extends Component {
  state = { query: '' };

  onChangedQuery = e => {
    this.props.setQuery(e.target.value);
  };

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.search();
    }
  };

  componentDidMount() {
    this.setState({ query: this.props.query });
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.setState({ query: this.props.query });
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <img src={iconSearch} alt="Buscar" />
        <TextField
          classes={{ root: styles.field }}
          label="Buscar sequência por tema"
          onChange={this.onChangedQuery}
          onKeyPress={this.onKeyPress}
          value={this.state.query}
        />
      </div>
    );
  }
}

SearchField.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    query: state.FiltersReducer.query,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: value => {
      dispatch(BodyActions.showLoading());
      dispatch(SequencesActions.search());
    },
    setQuery: value => {
      dispatch(FiltersActions.setQuery(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);
