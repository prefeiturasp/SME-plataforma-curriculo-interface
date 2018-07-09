import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import SequencesActions from '../../actions/SequencesActions';
import FilterBar from '../filters/FilterBar';
import FilterPanel from '../filters/FilterPanel';
import GridItem from './GridItem';
import ResultsNotFound from './ResultsNotFound';
import styles from './Sequences.css';

class Sequences extends Component {
  onClickedLoad() {
    
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    const items = this.props.data.map((item, i) => {
      return (
        <GridItem
          key={i}
          index={i}
          data={item} />
      );
    });

    const content = this.props.data.length ? (
      <div className="container">
        <ul className="row">
          {items}
        </ul>
        <button className={styles.load} onClick={this.onClickedLoad.bind(this)}>
          Carregar mais
        </button>
      </div>
    ) : (
      <div className="container">
        <ResultsNotFound />
      </div>
    );

    return (
      <section className={styles.wrapper}>
        <div className="container">
          <h1>Sequências de Atividades</h1>
          <h2><strong>{this.props.data.length}</strong> sequências foram encontradas</h2>
          <FilterBar />
        </div>
        <hr />
        <div className="container">
          <FilterPanel />
        </div>
        <div className={styles.list}>
          {content}
        </div>
      </section>
    );
  }
}

Sequences.propTypes = {
  data: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(SequencesActions.load());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequences);
