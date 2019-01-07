import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Chip from 'views/sequences/objects/Chip';
import FiltersActions from 'actions/FiltersActions';
import OrderButton from 'views/sequences/bar/OrderButton';
import SearchField from 'views/sequences/bar/SearchField';
import getWindowWidth from 'utils/getWindowWidth';
import iconFilters from 'images/icons/filters.svg';
import styles from './Bar.scss';

class Bar extends Component {
  componentDidMount() {
    this.target = document.querySelector('#sustainableDevGoal');
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  onClickedToggle = () => {
    this.props.togglePanel();

    if (getWindowWidth() < 768) {
      disableBodyScroll(this.target);
    }
  };

  render() {
    const filters = this.props.filters.concat(this.props.filtersExtra);

    const items = filters.map((item, i) => {
      return <Chip key={i} data={item} />;
    });

    const spacer = items.length ? <div className={styles.spacer} /> : null;

    return (
      <div className={styles.wrapper}>
        <div>
          <SearchField />
          {spacer}
          <div className={styles.list}>{items}</div>
        </div>
        <div className={styles.row}>
          <button className={styles.button} onClick={this.onClickedToggle}>
            <img src={iconFilters} alt="Filtros" />
            Filtros
          </button>
          <OrderButton />
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  filters: PropTypes.array.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filters: state.FiltersReducer.filters.filter(item => item.isActive),
    filtersExtra: state.FiltersReducer.filtersExtra.filter(
      item => item.isActive
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePanel: () => {
      dispatch(FiltersActions.togglePanel());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);
