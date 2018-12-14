import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from 'actions/BodyActions';
import FiltersActions from 'actions/FiltersActions';
import SequencesActions from 'actions/SequencesActions';
import FilterBar from './filters/FilterBar';
import FilterPanel from './filters/FilterPanel';
import GridItem from './GridItem';
import Loading from 'components/loading/Loading';
import Page from 'components/layout/Page';
import ResultsLoading from './ResultsLoading';
import ResultsNotFound from './ResultsNotFound';
import styles from './Sequences.css';

class Sequences extends Component {
  state = { windowHeight: 1000 };

  onClickedLoadMore = () => {
    this.props.loadMore(this.props.nextPage);
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
    });

    const params = this.props.match.params;
    if (params.ods) {
      this.props.loadWithFilter({
        type: 'sustainable_development_goals',
        id: parseInt(params.ods, 10),
      });
    }
    else if (params.mds) {
      this.props.loadWithFilter({
        type: 'knowledge_matrices',
        id: parseInt(params.mds, 10),
      });
    }
    else if (params.oda) {
      this.props.loadWithFilter({
        type: 'learning_objectives',
        id: parseInt(params.oda, 10),
      });
    }
    else {
      this.props.load();
    }
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

    let contents = <ResultsNotFound />;
    
    if (this.props.data.length) {
      const button = this.props.nextPage ? (
        <button className={styles.load} onClick={this.onClickedLoadMore}>
          Carregar mais
        </button>
      ) : null;

      const loadingOrButton = this.props.isSearching ? <Loading /> : button;

      contents = (
        <section className={styles.wrapper}>
          <div className="container">
            <h1>Sequências de Atividades</h1>
            <h2><strong>{this.props.totalItems}</strong> sequências foram encontradas</h2>
            <FilterBar />
          </div>
          <hr />
          <div className="container">
            <FilterPanel />
          </div>
          <div className={styles.list}>
            <div className={styles.results}>
              <ul className="row">
                {items}
              </ul>
              <div className={styles.center}>
                {loadingOrButton}
              </div>
            </div>
          </div>
        </section>
      );
    }
    else if (this.props.isSearching) {
      contents = (
        <ResultsLoading height={this.state.windowHeight} />
      );
    }
    
    return (
      <Page>
        {contents}
      </Page>
    );
  }
}

Sequences.propTypes = {
  data: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  nextPage: PropTypes.string,
  totalItems: PropTypes.number,
  load: PropTypes.func.isRequired,
  loadWithFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.items,
    isSearching: state.SequencesReducer.isSearching,
    nextPage: state.SequencesReducer.nextPage,
    totalItems: state.SequencesReducer.totalItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(FiltersActions.clearFilters());
      dispatch(SequencesActions.load());
    },
    loadMore: (page) => {
      dispatch(SequencesActions.loadMore(page));
    },
    loadWithFilter: (data) => {
      dispatch(FiltersActions.clearFilters());
      dispatch(FiltersActions.cacheFilter(data));
      dispatch(SequencesActions.loadWithFilter(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequences);
