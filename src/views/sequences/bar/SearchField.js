import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import BodyActions from 'actions/BodyActions';
import FiltersActions from 'actions/FiltersActions';
import SequencesActions from 'actions/SequencesActions';
import styles from './SearchField.scss';

class SearchField extends Component {
  onChangedQuery = e => {
    this.props.setQuery(e.target.value);
  };

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.search();
    }
  };

  onSubmit = () => {
    this.props.search();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="query">Buscar sequência por tema</InputLabel>
          <Input
            id="password"
            defaultValue={this.props.query}
            onChange={this.onChangedQuery}
            onKeyPress={this.onKeyPress}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="Buscar" onClick={this.onSubmit}>
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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
