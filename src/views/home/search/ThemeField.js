import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersActions from 'actions/FiltersActions';
import styles from './Field.scss';

class ThemeField extends Component {
  onChanged = e => {
    this.props.setQuery(e.currentTarget.value);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <input
          className={styles.field}
          placeholder="Buscar sequência por tema"
          type="text"
          onChange={this.onChanged}
        />
      </div>
    );
  }
}

ThemeField.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    setQuery: query => {
      dispatch(FiltersActions.setQuery(query));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ThemeField);
