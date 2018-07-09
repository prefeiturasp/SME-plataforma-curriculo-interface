import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import FiltersActions from '../../actions/FiltersActions';
import ActiveItem from './ActiveItem';
import getWindowWidth from '../util/getWindowWidth';
import iconFilters from '../../images/iconFilters.svg';
import styles from './FilterBar.css';

class FilterBar extends Component {
  onClickedToggle() {
    this.props.togglePanel();

    if (getWindowWidth() < 768) {
      this.props.showPopup();
    }
  }

  render() {
    const items = this.props.filters.map((item, i) => {
      return (
        <ActiveItem key={i} data={item} />
      );
    });

    return (
      <div className={styles.wrapper}>
        <ul>
          {items}
        </ul>
        <button className={styles.button} onClick={this.onClickedToggle.bind(this)}>
          <img src={iconFilters} alt="Filtros" />
          Filtros
        </button>
      </div>
    );
  }
}

FilterBar.propTypes = {
  filters: PropTypes.array.isRequired,
  showPopup: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filters: state.FiltersReducer.filters.filter(item => item.isActive),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showPopup: () => {
      dispatch(BodyActions.showPopup());
    },
    togglePanel: () => {
      dispatch(FiltersActions.togglePanel());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
