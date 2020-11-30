import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';
import iconCloseSmall from 'images/icons/closeSmall.svg';
import iconCloseSmallWhite from 'images/icons/closeSmallWhite.svg';
import styles from './Chip.scss';

class Chip extends Component {
  onClicked = () => {
    this.props.toggleFilter(this.props.data);
  };

  render() {
    const classes = this.props.data.color
      ? [styles.wrapper, styles.isColored]
      : [styles.wrapper];
    const style = this.props.data.color
      ? { backgroundColor: this.props.data.color }
      : {};
    const icon = this.props.data.color ? iconCloseSmallWhite : iconCloseSmall;
    const word = this.props.data.type === 'years' ? ' ano' : '';

    return (
      <button
        className={classes.join(' ')}
        style={style}
        onClick={this.onClicked}
      >
        {this.props.data.name ||
          this.props.data.title ||
          this.props.data.code ||
          this.props.data.description}
        {word}
        <img src={icon} alt="Remover" />
      </button>
    );
  }
}

Chip.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(ProjectFiltersActions.toggleFilterAndSearch(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Chip);
