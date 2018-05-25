import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SequencesActions from '../../actions/SequencesActions.js'
import FilterBar from '../filters/FilterBar.js';
import FilterPanel from '../filters/FilterPanel.js';
import GridItem from './GridItem.js';
import styles from'./Sequences.css';

class Sequences extends Component {
  onClickedLoad() {
    this.props.loadMore();
  }

  render() {
    const items = this.props.data.map((item, i) => {
      return (
        <GridItem key={i} data={item} />
      );
    });

    return (
      <section>
        <div className="container">
        	<h2 className={styles.h2}>Sequências de Atividades</h2>
          <h3 className={styles.h3}><strong>{this.props.data.length}</strong> sequências foram encontradas</h3>
          <FilterBar />
        </div>
        <hr />
        <div className="container">
          <FilterPanel />
        </div>
        <div className={styles.wrapper}>
          <div className="container">
            <ul className="row">
              {items}
            </ul>
            <button className={styles.load} onClick={this.onClickedLoad.bind(this)}>
              Carregar mais
            </button>
          </div>
        </div>
      </section>
    );
  }
}

Sequences.propTypes = {
  data: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.sequences,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMore: () => {
      dispatch(SequencesActions.loadMore());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequences);
